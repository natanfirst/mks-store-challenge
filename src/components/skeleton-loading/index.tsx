import { SkeletonContainer } from "./style";

const SkeletonLoading = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  const styles = {
    width: width || "100%",
    height: height || "16px",
  };

  return <SkeletonContainer style={styles} />;
};

export default SkeletonLoading;
