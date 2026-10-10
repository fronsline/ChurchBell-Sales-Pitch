// The sales pitch, in the brochure's order: story → the nine pillars (People, Finance, Reports,
// Worship, Events & To-Do, Records, Property & Assets, Legal, Trust & Oversight) → apps, setup,
// pricing → the diocese → security → close.
import Hero from '../slides/01-Hero';
import Story from '../slides/02-Story';
import HowItWorks from '../slides/03-HowItWorks';
import ThePain from '../slides/04-ThePain';
import WhatIf from '../slides/05-WhatIf';
import ChurchBellIntro from '../slides/06-ChurchBellIntro';
import PeopleHeader from '../slides/07-PeopleHeader';
import Members from '../slides/08-Members';
import HouseVisit from '../slides/08b-HouseVisit';
import SpecialDates from '../slides/09-SpecialDates';
import Groups from '../slides/10-Groups';
import Committee from '../slides/10b-Committee';
import VoterList from '../slides/10c-VoterList';
import MemberReports from '../slides/11-MemberReports';
import SelfService from '../slides/11b-SelfService';
import FinanceHeader from '../slides/12-FinanceHeader';
import Transactions from '../slides/13-Transactions';
import WhatsAppReceipt from '../slides/14-WhatsAppReceipt';
import KeyboardShortcuts from '../slides/15-KeyboardShortcuts';
import Auction from '../slides/16-Auction';
import ServiceRegister from '../slides/17-ServiceRegister';
import FixedDeposits from '../slides/17b-FixedDeposits';
import Budget from '../slides/17c-Budget';
import OnlineGiving from '../slides/17d-OnlineGiving';
import ChurchAssessment from '../slides/17e-Assessment';
import OpeningBalance from '../slides/18-OpeningBalance';
import ReportsHeader from '../slides/18b-ReportsHeader';
import Reports from '../slides/19-Reports';
import DefaultersStatements from '../slides/20-DefaultersStatements';
import SubscriptionCard from '../slides/20b-SubscriptionCard';
import WorshipHeader from '../slides/21w-WorshipHeader';
import OrderOfService from '../slides/21x-OrderOfService';
import WorshipBooksBible from '../slides/21y-WorshipBooksBible';
import EventsHeader from '../slides/21t-EventsHeader';
import EventsAttendance from '../slides/21z-EventsAttendance';
import NoticeBoard from '../slides/21u-NoticeBoard';
import ToDo from '../slides/21v-ToDo';
import RecordsHeader from '../slides/21-RecordsHeader';
import Records from '../slides/22-Records';
import Masters from '../slides/23-Masters';
import AssetManagement from '../slides/23b-AssetManagement';
import Property from '../slides/23c-Property';
import LegalHeader from '../slides/23f-LegalHeader';
import LegalDesk from '../slides/23d-LegalDesk';
import Correspondence from '../slides/23e-Correspondence';
import Settings from '../slides/25-Settings';
import Pulse from '../slides/25b-Pulse';
import TrustOversight from '../slides/24g-TrustOversight';
import MobileApp from '../slides/26-MobileApp';
import Setup from '../slides/28-Setup';
import PricingHeader from '../slides/27a-PricingHeader';
import PricingStory from '../slides/27b-PricingStory';
import Pricing from '../slides/27-Pricing';
import DioceseHeader from '../slides/26b-DioceseHeader';
import DioceseVision from '../slides/26c-DioceseVision';
import DioceseMembers from '../slides/26i-DioceseMembers';
import Assessment from '../slides/26d-Assessment';
import DioceseFinance from '../slides/26j-DioceseFinance';
import StaffManagement from '../slides/26f-StaffManagement';
import DioceseTalent from '../slides/26k-DioceseTalent';
import DioceseLegal from '../slides/26l-DioceseLegal';
import DioceseProperty from '../slides/26e-DioceseProperty';
import PropertyMattersConstruction from '../slides/26n-PropertyMattersConstruction';
import DioceseMailBox from '../slides/26m-DioceseMailBox';
import DioceseCommunication from '../slides/26o-DioceseCommunication';
import DioceseTrust from '../slides/26p-DioceseTrust';
import OnboardingDiocese from '../slides/30-OnboardingDiocese';
import OnboardingChurch from '../slides/31-OnboardingChurch';
import SecurityHero from '../slides/24a-SecurityHero';
import WhyCloud from '../slides/24c-WhyCloud';
import SecurityArchitecture from '../slides/24b-SecurityArchitecture';
import DiocesePricingOption2 from '../slides/24e-DiocesePricingOption2';
import DiocesePricing from '../slides/24d-DiocesePricing';
import DioceseROI from '../slides/24f-DioceseROI';
import DioceseClose from '../slides/26h-DioceseClose';
import Closing from '../slides/29-Closing';

export const salesSlides = [
  { component: Hero, title: 'Hero' },
  { component: Story, title: 'Our Story' },
  { component: HowItWorks, title: 'How It Works Today' },
  { component: ThePain, title: 'The Pain' },
  { component: WhatIf, title: 'What If?' },
  { component: ChurchBellIntro, title: 'ChurchBell' },
  // 01 People
  { component: PeopleHeader, title: 'People' },
  { component: Members, title: 'Members' },
  { component: HouseVisit, title: 'House Visits' },
  { component: SpecialDates, title: 'Special Dates' },
  { component: Groups, title: 'Groups' },
  { component: Committee, title: 'Committee' },
  { component: VoterList, title: 'Voter List' },
  { component: MemberReports, title: 'Member Reports' },
  { component: SelfService, title: 'Edit Requests & Declarations' },
  // 02 Finance
  { component: FinanceHeader, title: 'Finance' },
  { component: Transactions, title: 'Transactions' },
  { component: WhatsAppReceipt, title: 'WhatsApp Receipt' },
  { component: KeyboardShortcuts, title: 'Shortcuts' },
  { component: Auction, title: 'Auction' },
  { component: ServiceRegister, title: 'Service Register' },
  { component: FixedDeposits, title: 'Fixed Deposits' },
  { component: Budget, title: 'Budget' },
  { component: OnlineGiving, title: 'Online Giving' },
  { component: ChurchAssessment, title: 'Diocesan Assessment' },
  { component: OpeningBalance, title: 'Opening Balance' },
  // 03 Reports
  { component: ReportsHeader, title: 'Reports' },
  { component: Reports, title: 'Report Types' },
  { component: DefaultersStatements, title: 'Defaulters' },
  { component: SubscriptionCard, title: 'Subscription Card' },
  // 04 Worship
  { component: WorshipHeader, title: 'Worship' },
  { component: OrderOfService, title: 'Order of Service' },
  { component: WorshipBooksBible, title: 'Worship Books & Bible' },
  // 05 Events & To-Do
  { component: EventsHeader, title: 'Events & To-Do' },
  { component: EventsAttendance, title: 'Events & Attendance' },
  { component: NoticeBoard, title: 'Notice Board' },
  { component: ToDo, title: 'To-Do Lists' },
  // 06 Records, 07 Property & Assets
  { component: RecordsHeader, title: 'Records' },
  { component: Records, title: 'Records Detail' },
  { component: Masters, title: 'Masters' },
  { component: AssetManagement, title: 'Asset Management' },
  { component: Property, title: 'Property & Rent' },
  // 08 Legal & Letters
  { component: LegalHeader, title: 'Legal & Letters' },
  { component: LegalDesk, title: 'Legal Desk' },
  { component: Correspondence, title: 'Correspondence' },
  // 09 Trust & Oversight, apps
  { component: Settings, title: 'Settings' },
  { component: Pulse, title: 'Pulse' },
  { component: TrustOversight, title: 'Trust & Oversight' },
  { component: MobileApp, title: 'Mobile App' },
  { component: Setup, title: 'Setup' },
  { component: PricingHeader, title: 'Pricing' },
  { component: PricingStory, title: 'Pricing Story' },
  { component: Pricing, title: 'Pricing Details' },
  // The diocese
  { component: DioceseHeader, title: 'Diocese' },
  { component: DioceseVision, title: 'Diocese Vision' },
  { component: DioceseMembers, title: 'Diocese Members' },
  { component: Assessment, title: 'Assessment' },
  { component: DioceseFinance, title: 'Diocese Finance' },
  { component: StaffManagement, title: 'Workforce' },
  { component: DioceseTalent, title: 'Talent Acquisition' },
  { component: DioceseLegal, title: 'Legal' },
  { component: DioceseProperty, title: 'Diocese Property' },
  { component: PropertyMattersConstruction, title: 'Land & Buildings' },
  { component: DioceseMailBox, title: 'Mail Box' },
  { component: DioceseCommunication, title: 'Circulars & Events' },
  { component: DioceseTrust, title: 'Diocese Trust' },
  { component: OnboardingDiocese, title: 'Onboarding: Diocese' },
  { component: OnboardingChurch, title: 'Onboarding: Church' },
  { component: SecurityHero, title: 'Security' },
  { component: WhyCloud, title: 'Cloud vs On-Premise' },
  { component: SecurityArchitecture, title: 'Architecture' },
  { component: DiocesePricingOption2, title: 'Pricing: Option 1' },
  { component: DiocesePricing, title: 'Pricing: Option 2' },
  { component: DioceseROI, title: 'ROI: Church Savings' },
  { component: DioceseClose, title: 'Diocese CTA' },
  { component: Closing, title: 'Closing' },
];
