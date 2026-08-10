import JavaCert from '../images/java.png';
import HTML5Cert from '../images/html5.png';
import DBCert from '../images/database.png';
import ExcelCert from '../images/excel.png';
import UdemyCert from '../images/udemy.png';
import DeviceConfigCert from '../images/device-configuration.png';
import NetworkingBasicsCert from '../images/networking-basics.png'

export interface CertificateProps {
    title: string
    picture: string
    issued: string
    link: string
}

export const certificates: CertificateProps[] = [
    {
        "title": "Certiport: Excel Associate (Office 2019)",
        "picture": ExcelCert,
        "issued": "Jan. 17, 2023",
        "link": "https://www.credly.com/badges/c5a5d462-8376-4e7a-9a0a-deeb860058e7/public_url"
    },
    {
        "title": "Certiport: Databases",
        "picture": DBCert,
        "issued": "Jan. 5, 2024",
        "link": "https://www.credly.com/badges/fcdd5372-9073-413c-a192-559b01266908/public_url"
    },
    {
        "title": "Certiport: HTML5 Application Development",
        "picture": HTML5Cert,
        "issued": "June 5, 2024",
        "link": "https://www.credly.com/badges/492fc82b-edc2-48bd-8dbd-6d087699d6dc/public_url"
    },
    {
        "title": "Certiport: Java",
        "picture": JavaCert,
        "issued": "Jan. 9, 2025",
        "link": "https://www.credly.com/badges/2d818d4f-4168-47ea-b44a-6333a2bbfe70/public_url"
    },
    {
        "title": "Certiport: Device Configuration and Management",
        "picture": DeviceConfigCert,
        "issued": "Jan. 4, 2026",
        "link": "https://www.credly.com/badges/f1b42fa2-511f-4599-b934-917994406c77/public_url"
    },
    {
        "title": "Udemy: System Design for Beginners",
        "picture": UdemyCert,
        "issued": "Jan. 22, 2026",
        "link": "http://ude.my/UC-19cc20ba-ecf4-47c3-9c8a-7461221c7e7e"
    },
    {
        "title": "Cisco: Networking Basics",
        "picture": NetworkingBasicsCert,
        "issued": "Mar. 16, 2026",
        "link": "https://www.credly.com/badges/69f5aa96-23c4-4904-98d4-e638112b5b45/public_url"
    },
    {
        "title": "Udemy: System Design Masterclass (2026) - FAANG Insiders",
        "picture": UdemyCert,
        "issued": "Aug. 6, 2026",
        "link": "http://ude.my/UC-e1539b79-2e5e-4f40-bd81-9603ed227b77"
    }

]
