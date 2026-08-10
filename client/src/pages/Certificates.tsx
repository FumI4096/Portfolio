import CertificateCard from "../components/CertificateCard";

import { certificates } from "../assets/constants/certificates.ts";

export default function Certificate(){
    return (
        <section id="credentials" className='max-w-[1700px] mx-auto h-auto flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-sm:px-[4.5rem] max-xs:px-[2.5rem]'>
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">My Credentials</h2>
            <ul className='grid grid-cols-2 h-auto w-full gap-11 max-[1460px]:grid-cols-1 max-[1460px]:gap-10'> 
                {certificates.map((certificate, index) => {
                        return (
                            <CertificateCard 
                            key={index}
                            title={certificate.title}
                            picture={certificate.picture}
                            issued={certificate.issued}
                            link={certificate.link}
                            />
                        )
                    }
                )}
                
            </ul>
        </section>
    )
}