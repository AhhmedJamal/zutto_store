import { motion } from "framer-motion";

const ShimmerDetails = () => {
  const shimmer = (
    <motion.div
      initial={{ opacity: 0.5, scaleX: 0, translateX: "-100%" }}
      animate={{ opacity: 1, scaleX: 1, translateX: "100%" }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, #e0e0e0, transparent)",
        position: "absolute",
      }}
    />
  );

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          marginBottom: "16px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        {shimmer}
        {/* Your card content goes here */}
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",

            zIndex: 1,
            height: "100px",
          }}
        ></div>
      </div>
      {/*  */}
      <div
        style={{
          width: "100%",
          height: "10px",
          position: "relative",
          marginBottom: "5px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        {shimmer}
        {/* Another set of details */}
        <div
          style={{
            backgroundColor: "white",
            height: "20px",

            zIndex: 1,
          }}
        ></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "10px",
          position: "relative",
          marginBottom: "10px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        {shimmer}
        {/* Another set of details */}
        <div
          style={{
            backgroundColor: "white",
            height: "20px",

            zIndex: 1,
          }}
        ></div>
      </div>
      {/*  */}
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "15px",
          marginBottom: "16px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        {shimmer}
        {/* Another set of details */}
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            zIndex: 1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ShimmerDetails;
