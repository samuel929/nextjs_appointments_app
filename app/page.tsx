import ClientForm from "@/components/Forms/ClientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
          />
          <ClientForm />
          <p className='copyright py-12'>© 2024 Appointments</p>
        </div>
      </section>
      <Image
        height={1000}
        width={1000}
        alt='client'
        className='side-img max-w-[50%]'
        src='/assets/images/onboarding-img.png'
      />
    </div>
  );
}
