export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`hover:shadow-none hover:scale-95 transition-all duration-200 flex items-center ${
        outline ? "border border-yellow-100 bg-transparent" : "bg-yellow-100"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-yellow-200"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
}
