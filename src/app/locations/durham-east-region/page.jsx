export default function page() {
  return (
    <>
      <div className="p-10 ">
        <h3 className="font-bold text-4xl text-primary mb-10">
          Duct Cleaning Service Regions - Durham East
        </h3>
        <p>We serve all regions in the great region of Durham East. Reach out to us and book an appointment for your duct cleaning and other services.</p>
      </div>

      <div className="p-10 grid grid-cols-4 gap-10 justify-center">
        <div className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">Bowmanville</h3>
          </div>
        </div>
        <div className="rounded-full size-50 bg-primary flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-light-accent flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-white">Clarington</h3>
          </div>
        </div>
        <div className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">Cobourg</h3>
          </div>
        </div>
        <div className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">Courtice</h3>
          </div>
        </div>
        <div className="rounded-full size-50 bg-primary flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-light-accent flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-white">Newcastle</h3>
          </div>
        </div>
        
        <div className="rounded-full size-50 bg-primary flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-light-accent flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-white">Port Hope</h3>
          </div>
        </div>
        <div className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">Port Perry</h3>
          </div>
        </div>
        
      </div>
    </>
  );
}