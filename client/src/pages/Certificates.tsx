import JavaCert from '../assets/images/java.png';
import HTML5Cert from '../assets/images/html5.png';
import DBCert from '../assets/images/database.png';
import ExcelCert from '../assets/images/excel.png';
import CertificateCard from '../components/CertificateCard';


export default function Certificate(){
    return (
        <section id="credentials" className='h-auto flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-sm:px-[4.5rem]'>
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">My Credentials</h2>
            <ul className='grid grid-cols-2 h-auto w-full gap-11 max-[1460px]:grid-cols-1 max-[1460px]:gap-10'> 
                <CertificateCard title='Microsoft Office Specialist: Excel Associate (Office 2019)' picture={ExcelCert} issued='1/17/23'/>
                <CertificateCard title='IT Specialist: Databases' picture={DBCert} issued='1/5/24'/>
                <CertificateCard title='IT Specialist: HTML5 Application Development' picture={HTML5Cert} issued='6/5/24'/>
                <CertificateCard title='IT Specialist: Java' picture={JavaCert} issued='1/9/25'/>
                
            </ul>
        </section>
    )
}