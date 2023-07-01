import { FC, ReactElement } from "react";
import { motion } from "framer-motion";

export const ReactModule: FC = (): ReactElement => {
  return (
    <motion.div>
      <h1 className="text-white text-2xl">test module</h1>
    </motion.div>
  );
};
