export function WaitList() {
  return (
    <div className="flex">
      <div className="w-[400px] border-[0.84px] border-solid border-black">
        <input
          className="font-mono text-black whitespace-nowrap bg-transparent w-full p-2"
          type="email"
          placeholder="Enter email to join the waitlist..."
        />
      </div>
      <div className="bg-black border-[0.84px] border-solid border-black rounded-[0px_20.97px_20.97px_0px]">
        <button className="font-mono font-bold text-white whitespace-nowrap p-2">
          Interesting !
        </button>
      </div>
    </div>
  );
}
