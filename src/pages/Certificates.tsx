import JavaCert from '../assets/images/java.png';
import HTML5Cert from '../assets/images/html5.png';
import DBCert from '../assets/images/database.png';
import ExcelCert from '../assets/images/excel.png';
import CertificateCard from '../components/CertificateCard';


export default function Certificate(){
    return (
        <section className='h-1000 flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between '>
            <h2 className="font-poppins-semibold text-5xl text-white">My Certificates</h2>
            <ul className='grid grid-cols-2 h-auto w-full gap-11'>
                <CertificateCard title='Microsoft Office Specialist: Excel Associate (Office 2019)' picture={ExcelCert} issued='1/17/23'/>
            
                <CertificateCard title='Information Technology Specialist: Databases' picture={DBCert} issued='1/5/24'/>
                
                <CertificateCard title='Information Technology Specialist: HTML5 Application Development' picture={HTML5Cert} issued='6/5/24'/>
                <CertificateCard title='Information Technology Specialist: Java' picture={JavaCert} issued='1/9/25'/>
                
            </ul>
        </section>
    )
}