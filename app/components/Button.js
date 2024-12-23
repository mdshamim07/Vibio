export default function Button({ loading, children, isDisabled }) {
  return (
    <button
      type="submit"
      disabled={loading || isDisabled}
      className={`w-full flex justify-center items-center gap-2 bg-primary text-white p-2 rounded-md  ${
        loading || isDisabled ? "disabled:opacity-50" : "hover:bg-hover"
      }`}
    >
      {loading && (
        <div
          className="w-[15px] h-[15px] border-2 border-white border-t-transparent rounded-full animate-spin"
          aria-label="Loading"
        ></div>
      )}
      {loading ? "Loading..." : children}
    </button>
  );
}
