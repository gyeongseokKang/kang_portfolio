import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

interface SectionLayoutProps {
  id?: string;
  title: string;
  fullWidth?: boolean;
  description: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  id,
  title,
  description,
  fullWidth = false,
  className,
  children,
}: SectionLayoutProps) {
  return (
    <>
      <motion.section
        id={id}
        className={cn("space-y-8 pt-10")}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={cn("space-y-2 container mx-auto")}
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={cn(
            fullWidth
              ? "container mx-auto max-w-[85vw] md:max-w-[calc(100vw-(var(--sidebar-width)*1.5))] w-full"
              : "container mx-auto",
            className
          )}
        >
          {children}
        </motion.div>
      </motion.section>
    </>
  );
}
