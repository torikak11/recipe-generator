export default function loading() {
  return (
    <div className="flex justify-center items-center mx-auto max-h-screen">
      <div className="flex flex-row w-[90px] h-[120px]">
        <div className="w-[17px] h-[80px] m-auto rounded animate-pulse-01"></div>
        <div className="w-[17px] h-[80px] m-auto rounded animate-pulse-02"></div>
        <div className="w-[17px] h-[80px] m-auto rounded animate-pulse-03"></div>
      </div>
    </div>
  );
}
