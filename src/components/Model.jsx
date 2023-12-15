import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../store/model/modelSlice";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Model = () => {
  const model = useSelector((state) => state.model.show);
  const dispatch = useDispatch();
  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.point.y > threshold) {
      dispatch(closeModel(false));
    }
  };
  return (
    <AnimatePresence>
      {model && (
        <motion.div
          initial={{ background: "rgba(22, 22, 22, 0.49)" }}
          animate={{ background: "rgba(22, 22, 22, 0.49)" }}
          exit={{ background: "rgba(22, 22, 22, 0.49)" }}
          transition={{ duration: 0.3 }}
          className="fixed z-20 top-0 w-screen h-[100vh]  container"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", stiffness: 300, damping: 25 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            className=" fixed bottom-0 z-2s0"
          >
            <div
              className=" relative    bg-white w-screen  before:content-[''] 
             before:bg-gray-500 before:rounded-xl  before:self-center before:w-5 before:m-1 before:h-[3px] items-start rounded-t-2xl flex flex-col  container h-[80vh]"
            >
              <button
                onClick={() => {
                  dispatch(closeModel(false));
                }}
              ></button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
