import propTypes from "prop-types";

const Avatar = ({ src, alt = "Avatar", size = 50, isRounded = true }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius: isRounded ? "50%" : "0",
        objectFit: "cover",
      }}
    />
  );
};

Avatar.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  size: propTypes.number,
  isRounded: propTypes.bool,
};

export default Avatar;
