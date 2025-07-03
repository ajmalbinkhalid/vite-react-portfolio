import React from "react";

const ButtonWithProps = ({ text, icon: Icon, href, download = false, className = "" }) => {
  const commonClasses = `inline-flex items-center gap-2 px-4 py-2 rounded-full ${className}`;

  const isMailto = href?.startsWith("mailto:");
  const isInternalAnchor = href?.startsWith("#");

  return (
    <a
      href={href}
      {...(!(isMailto || isInternalAnchor) && { target: "_blank", rel: "noopener noreferrer" })}
      download={download}
      className={commonClasses}
    >
      {Icon && <Icon className="text-xl" />}
      {text}
    </a>
  );
};

export default ButtonWithProps;
