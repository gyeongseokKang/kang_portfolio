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
  description: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  id,
  title,
  description,
  children,
}: SectionLayoutProps) {
  return (
    <motion.section
      id={id}
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="space-y-2" variants={itemVariants}>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.section>
  );
}
