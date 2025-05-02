export default function page() {
  return (
    <>
      <div className="p-10 ">
        <h3 className="font-bold text-4xl text-primary mb-10">
          Duct Cleaning Service Regions - Toronto
        </h3>
        <p>We serve all regions in the great city of Toronto. Reach out to us and book an appointment for your duct cleaning and other services.</p>
      </div>
      <div className="p-10 flex gap-10 justify-center">
        <div  className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">Scarborough</h3>
          </div>
        </div>
        <div  className="rounded-full size-50 bg-primary flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-light-accent flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-white">Etobicoke</h3>
          </div>
        </div>
        <div  className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">North York</h3>
          </div>
        </div>
       
      </div>
    </>
  );
}