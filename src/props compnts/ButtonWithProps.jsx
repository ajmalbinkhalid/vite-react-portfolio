import React from "react";

const ButtonWithProps = ({ text, icon: Icon, href, download = false, className = "" }) => {
  const commonClasses = `inline-flex items-center gap-2 px-4 py-2 rounded-full ${className}`;

  // Check if it's a mailto: link
  const isMailto = href?.startsWith("mailto:");

  if (href) {
    return (
      <a
        href={href}
        {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
        download={download}
        className={commonClasses}
      >
        {Icon && <Icon className="text-xl" />}
        {text}
      </a>
    );
  }

  return (
    <a className={commonClasses}>
      {Icon && <Icon className="text-xl" />}
      {text}
    </a>
  );
};

export default ButtonWithProps;
