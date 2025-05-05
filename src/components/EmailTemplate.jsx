import Image from 'next/image';

export const EmailTemplate = ({
  name,
  email,
  phone,
  city,
  serviceNeeded,
  notes,
}) => {
  return (
    // <div className="border-primary bg-light-accent flex w-2/3 flex-col items-center justify-center gap-4 rounded-3xl border p-20 text-center">
    //   {/* <Image
    //   src={'./logo.png'}
    //   width={100}
    //   height={100}
    //   alt="logo of Ebenezer Duct Cleaning"
    //   /> */}
    //   <h1 className="text-3xl font-bold"> EDC - Ebenezer Duct Cleaning</h1>
    //   <h3 className="text-2xl font-bold">Hello Binoy,</h3>
    //   <p>
    //     You have a new quote request from{' '}
    //     <span className="font-bold">{name}</span>. {name} submitted the
    //     following information for a quote:
    //   </p>
    //   <div className="flex flex-col gap-2">
    //     <p>{email}</p>

    //     <a
    //       href={`tel:${phone}`}
    //       className="bg-primary rounded-lg py-2 text-white underline underline-offset-2"
    //     >
    //       {phone}
    //     </a>
    //     <p>
    //       City: <span className="font-bold">{city}</span>
    //     </p>
    //     <p className="border-primary rounded-lg border p-2">
    //       Services Needed: {serviceNeeded}
    //     </p>
    //     <p>
    //       <span className="underline underline-offset-2">
    //         {' '}
    //         Additional Notes
    //       </span>
    //       <br />
    //       {notes}
    //     </p>
    //   </div>
    //   <div className="">
    //     <p>Thank you and make sure you get back to them soon, </p>
    //     <p className="font-bold">Ebenezer Website</p>
    //   </div>
    // </div>
    // components/EmailTemplate.jsx

    // This approach uses React Email with Resend
    // First install: npm install @react-email/components

    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #007bff',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        flex: 'column',
      }}
    >
      <h1 className="text-3xl font-bold"> EDC - Ebenezer Duct Cleaning</h1>
      <h3
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Hello Binoy,
      </h3>
      <p style={{ marginBottom: '20px' }}>
        You have a new quote request from <strong>{name}</strong>. {name}{' '}
        submitted the following information for a quote:
      </p>
      <div
        style={{
          display: 'grid',
          gridColumn: '1',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <p style={{ margin: '5px 0' }}>{email}</p>

        <a
          href={`tel:${phone}`}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            textDecoration: 'underline',
            display: 'inline-block',
            margin: '5px 0',
          }}
        >
          {phone}
        </a>

        <p style={{ margin: '5px 0' }}>
          City: <strong>{city}</strong>
        </p>

        <p
          style={{
            border: '1px solid #007bff',
            borderRadius: '5px',
            padding: '10px',
            margin: '5px 0',
          }}
        >
          Services Needed: {serviceNeeded}
        </p>

        <div style={{ margin: '10px 0' }}>
          <span style={{ textDecoration: 'underline' }}>Additional Notes</span>
          <br />
          {notes || 'No additional notes provided.'}
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p style={{ margin: '5px 0' }}>
          Thank you and make sure you get back to them soon,
        </p>
        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>Ebenezer Website</p>
      </div>
    </div>
  );
};
