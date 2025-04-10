
import i2s from '../images/jobExp/i2s.png';
import WD from '../images/jobExp/WD.png';

import Collabera from '../images/jobExp/Collabera.avif';
import PJLhuillier from '../images/jobExp/PJL.png';

import SLIC from '../images/jobExp/SLIC.png';
import Toyota from '../images/jobExp/TMP.jpg';

import Melko from '../images/jobExp/melko.webp';
import STI from '../images/jobExp/STI.png';


 const jobExpData = [
	{
		id: 1,
        role: 'Software Engineer',
		company: [{name: 'i2s Business Solution', logo: i2s, alt: 'i2s'}],
		client: [{name: 'Western Digital', logo: WD, alt: 'WD'}],
		from: 'January 3, 2023',
        to: 'Present',
        responsibilities: 
        [
            'Design and develop host applications for production tools and machines',
            'Develop and maintain existing applications.',
            'Provide documents such as System Specs,User guide,Testplan and other related document.',
            'Provide support to the user within applications.'

        ]
	},
    {
		id: 2,
        role: '.Net Developer',
		company: [{name: 'Collabera Digital', logo: Collabera, alt: 'Collabera'}],
		client: [{name: 'PJ Lhuillier', logo: PJLhuillier, alt: 'PJ Lhuillier'}],
		from: 'September 19, 2022',
        to: 'January 6, 2023',
        responsibilities: 
        ['Design, develop web service and windows form application.','Develop and maintain existing application.','Provide document for development and operations.','Provide support to the user within applications and webservice.'

        ]
	},
    {
		id: 3,
        role: '.Net Developer',
		company: [{name: 'Software Laboratory Consulting', logo: SLIC, alt: 'SLIC'}],
		client: [{name: 'Toyota Motors Philippines', logo: Toyota, alt: 'Toyota Motors Philippines'}],
		from: 'Sept 16, 2022',
        to: 'March 5, 2021',
        responsibilities: ['','','','']
	},
    {
		id: 4,
        role: '.Net Developer',
		company: [{name: 'Melko outsourcing Solutions', logo: Melko, alt: 'Melko Outsourcing Solutions'}],
		client: [{name: 'Melko outsourcing Solutions', logo: Melko, alt: 'Melko Outsourcing Solutions'}],
		from: 'Sept 5, 2020',
        to: 'March 3, 2021',
        responsibilities: ['','','','']
	},
    {
		id: 4,
        role: '.Net Developer',
		company: [{name: 'STI College Santa Rosa', logo: STI ,alt: 'STI College Santa Rosa'}],
		client: [{name: 'STI College Santa Rosa', logo: STI ,alt: 'STI College Santa Rosa'}],
		from: 'June 4, 2018',
        to: 'June 4, 2020',
        responsibilities: ['','','','']
	},

];

export default jobExpData;