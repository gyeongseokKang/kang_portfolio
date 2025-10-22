# Layered Architecture & Conventions

## 1. Standard Roles in Each Slice

```
slice/
  ├── api/     // Data fetching
  ├── config/  // Constants, configurations
  ├── model/   // Business logic, types, state
  ├── lib/     // Utils, helpers
  └── ui/      // Visual components
```

---

## 2. Layer-Specific Conventions

### Entity Layer

**Directory Structure:**

```
entities/product/
  api/    // axios, fetch basic CRUD operations
  config/ // Entity configurations, e.g., MAX_POST_LENGTH
  model/  // Pure business logic + types
  lib/    // Entity-specific utilities, e.g., removeItem
  ui/     // Read-only presentational components
```

**Rules:**

- All functions must be pure (same input = same output)
- No side effects
- No state management
- No external dependencies
- Focus on data transformation with own schema
- Reusable across different features
- Testable with pure unit tests

**ui:** Pure presentational components  
**model:** Contains pure functions, business logic, and type definitions

**Key Point:** _pure!_

#### Example

**✅ Good**

```ts
// entities/product/model/validation.ts
export const isValidProduct = (product: Product): boolean => {
  return product.price > 0 && product.stock >= 0;
};
```

**❌ Bad**

```ts
// Impure function with side effects
export const updateProductPrice = (product: Product, newPrice: number) => {
  product.price = newPrice; // Mutation!
  api.updateProduct(product); // Side effect!
};
```

---

### Features Layer

**Components to Include:**

- Main action component
- All related form inputs
- All supporting UI elements

**Rules:**

- One Feature = One Primary User Action
- Include one primary user action
- Include all supporting UI elements
- All related form inputs belong together

**Hook-Based Logic:**

- Business logic lives in hooks
- Each hook has single responsibility

**Props Guidelines:**

- Accept only domain data
- No event handler props
- No UI configuration props

#### Examples

**✅ Good Example**

```tsx
// features/addToCart/ui/AddToCartButton.tsx
export const AddToCartButton = ({ product }: { product: Product }) => {
  const { handleAddToCart, isLoading } = useAddToCart();

  return (
    <Button onClick={() => handleAddToCart(product)} disabled={isLoading}>
      Add to Cart
    </Button>
  );
};

// features/addToCart/model/useAddToCart.ts
export const useAddToCart = () => {
  const { mutate, isLoading } = useAddToCartMutation();

  const handleAddToCart = (product: Product) => {
    mutate(product.id);
  };

  return { handleAddToCart, isLoading };
};
```

**✅ Good Example 2: Action with Input State**

```tsx
// features/addComment/ui/AddCommentForm.tsx
export const AddCommentForm = ({ productId }: { productId: string }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    api.addComment(productId, comment);
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <Button type="submit">Add Comment</Button>
    </Form>
  );
};
```

**❌ Bad Examples**

_Many Props with Event Handlers_

```tsx
// ❌ Bad Example 1: Too Many Responsibilities
// features/product/ui/ProductActions.tsx
export const ProductActions = ({
  product,
  onAddToCart, // Receiving handlers as props
  onWishlist, // Should handle internally
  theme, // UI config props
  className, // Style props
}) => {
  return (
    <div className={className}>
      <Button onClick={() => onAddToCart(product)} theme={theme}>
        Add to Cart
      </Button>
      <Button onClick={() => onWishlist(product)}>Wishlist</Button>
    </div>
  );
};
```

_Feature Has No User Action_

```tsx
// ❌ Bad Example 2: No Handler (Should be in Entity or Widget)
// features/product/ui/ProductPrice.tsx
export const ProductPrice = ({ price }: { price: number }) => {
  return <div className="text-lg">${price.toFixed(2)}</div>;
};
```

---

### Shared Layer

The `shared` layer contains reusable components, utilities, and configurations used across all
layers.

#### Shared/UI Layer Structure

**Directory Structure for Complex Components:**

```
shared/ui/data-table/
  ├── index.ts              // Public API exports
  ├── model/
  │   ├── types.ts          // TypeScript interfaces/types
  │   └── config.ts         // Default configurations
  ├── lib/
  │   ├── use-data-table.ts // Main composable hook
  │   └── utils.ts          // Helper utilities
  └── ui/
      ├── data-table.tsx
      ├── data-table-header.tsx
      ├── data-table-pagination.tsx
      └── data-table-skeleton.tsx
```

**Rules for Shared/UI:**

- Can accept event handlers (unlike other layers)
- Can accept styling/configuration props
- Should be highly reusable and composable
- Extract complex logic into hooks (lib/)
- Use model/ for types and configuration
- Provide clean public API through index.ts

#### Example: Data Table Implementation

**✅ Good Example: Hook-Based Logic**

```tsx
// shared/ui/data-table/lib/use-data-table.ts
export function useDataTable<TData>({
  data,
  columns,
  config = {},
  serverSide = {},
}: UseDataTableProps<TData>) {
  const tableConfig = useMemo(() => ({ ...DEFAULT_DATA_TABLE_CONFIG, ...config }), [config]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableConfig.defaultPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return {
    table,
    config: tableConfig,
    resetAllFilters: () => setColumnFilters([]),
    // ... other utilities
  };
}
```

**✅ Good Example: Clean Component API**

```tsx
// shared/ui/data-table/data-table.tsx
export function DataTable<TData, TValue>({
  table,
  columns,
  data = [],
  config,
  isLoading = false,
  error = null,
  emptyMessage = DEFAULT_MESSAGES.empty,
  className,
}: DataTableProps<TData, TValue>) {
  if (isLoading) {
    return <DataTableSkeleton columnCount={columns.length} />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return <div className={cn(TABLE_CLASSES.container, className)}>{/* Table implementation */}</div>;
}
```

**✅ Good Example: Configuration-Based**

```tsx
// shared/ui/data-table/model/config.ts
export const DEFAULT_DATA_TABLE_CONFIG: Required<DataTableConfig> = {
  pagination: true,
  sorting: true,
  filtering: true,
  columnVisibility: true,
  rowSelection: false,
  defaultPageSize: 10,
  pageSizeOptions: [10, 20, 30, 40, 50],
  virtualization: false,
};
```

---

### Widgets Layer

```
widgets/header/
  api/    // Widget-specific APIs
  config/ // Widget configurations
  model/  // Types + minimal logic
  lib/    // Widget-specific utilities
  ui/     // Composition of features
```

**Rules:**

- Compose features; avoid own handlers
- Only domain data as props
- Or no props at all

---

### Pages Layer

```
pages/main/
  api/    // Page-specific data
  config/ // Page configurations
  lib/    // Page-specific utilities
  model/  // Routes + types
  ui/     // Page composition
```

---

## 3. Props Guidelines

### For `shared/ui` ONLY

- Can accept event handlers
- Can accept styling props
- Can accept configuration props

### For All Other Components

**✅ Good**

```tsx
// Accept only domain data
const ProductCard = ({ product }) => { ... }
```

**❌ Bad**

```tsx
// Avoid event handlers and styling/configuration props
const ProductCard = ({ product, onAddToCart, onWishlist }) => { ... }
```

- Accept only domain data
- Avoid event handlers
- Avoid configuration props
- Avoid styling props
