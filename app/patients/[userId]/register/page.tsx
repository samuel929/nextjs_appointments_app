import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/Forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.action";
import "react-datepicker/dist/react-datepicker.css";

const RegistrationPage = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
          />
          <RegisterForm user={user} />
          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © 2024 Appointments
            </p>
            <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        height={1000}
        width={1000}
        alt='client'
        className='side-img max-w-[390px]'
        src='/assets/images/register-img.png'
      />
    </div>
  );
};

export default RegistrationPage;
