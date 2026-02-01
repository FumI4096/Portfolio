import JavaCert from '../assets/images/java.png';
import HTML5Cert from '../assets/images/html5.png';
import DBCert from '../assets/images/database.png';
import ExcelCert from '../assets/images/excel.png';
import UdemyCert from '../assets/images/udemy.png';
import DeviceConfigCert from '../assets/images/device-configuration.png';
import CertificateCard from '../components/CertificateCard';

export default function Certificate(){
    return (
        <section id="credentials" className='h-auto flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-sm:px-[4.5rem] max-xs:px-[2.5rem]'>
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">My Credentials</h2>
            <ul className='grid grid-cols-2 h-auto w-full gap-11 max-[1460px]:grid-cols-1 max-[1460px]:gap-10'> 
                <CertificateCard title='Certiport: Excel Associate (Office 2019)' picture={ExcelCert} issued='1/17/23' link="https://www.credly.com/badges/c5a5d462-8376-4e7a-9a0a-deeb860058e7/public_url"/>
                <CertificateCard title='Certiport: Databases' picture={DBCert} issued='1/5/24' link="https://www.credly.com/badges/fcdd5372-9073-413c-a192-559b01266908/public_url"/>
                <CertificateCard title='Certiport: HTML5 Application Development' picture={HTML5Cert} issued='6/5/24' link="https://www.credly.com/badges/492fc82b-edc2-48bd-8dbd-6d087699d6dc/public_url"/>
                <CertificateCard title='Certiport: Java' picture={JavaCert} issued='1/9/25' link="https://www.credly.com/badges/2d818d4f-4168-47ea-b44a-6333a2bbfe70/public_url"/>
                <CertificateCard title='Certiport: Device Configuration and Management' picture={DeviceConfigCert} issued='1/04/26' link="https://www.credly.com/badges/f1b42fa2-511f-4599-b934-917994406c77/public_url"/>
                <CertificateCard title='Udemy: System Design for Beginners' picture={UdemyCert} issued='1/22/26' link="http://ude.my/UC-19cc20ba-ecf4-47c3-9c8a-7461221c7e7e"/>
                
            </ul>
        </section>
    )
}