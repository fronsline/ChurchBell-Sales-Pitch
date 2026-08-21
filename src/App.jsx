import { AnimatePresence, motion } from 'framer-motion';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import SlideLayout from './components/SlideLayout';
import SlideNav, { SlideOverview } from './components/SlideNav';
import SlideDrawer from './components/SlideDrawer';
import Background3D from './components/Background3D';

// Import all slides
import Hero from './slides/01-Hero';
import Story from './slides/02-Story';
import HowItWorks from './slides/03-HowItWorks';
import ThePain from './slides/04-ThePain';
import WhatIf from './slides/05-WhatIf';
import ChurchBellIntro from './slides/06-ChurchBellIntro';
import PeopleHeader from './slides/07-PeopleHeader';
import Members from './slides/08-Members';
import SpecialDates from './slides/09-SpecialDates';
import Groups from './slides/10-Groups';
import Committee from './slides/10b-Committee';
import VoterList from './slides/10c-VoterList';
import MemberReports from './slides/11-MemberReports';
import FinanceHeader from './slides/12-FinanceHeader';
import Transactions from './slides/13-Transactions';
import WhatsAppReceipt from './slides/14-WhatsAppReceipt';
import KeyboardShortcuts from './slides/15-KeyboardShortcuts';
import Auction from './slides/16-Auction';
import ServiceRegister from './slides/17-ServiceRegister';
import OpeningBalance from './slides/18-OpeningBalance';
import ReportsHeader from './slides/18b-ReportsHeader';
import Reports from './slides/19-Reports';
import DefaultersStatements from './slides/20-DefaultersStatements';
import SubscriptionCard from './slides/20b-SubscriptionCard';
import RecordsHeader from './slides/21-RecordsHeader';
import Records from './slides/22-Records';
import Masters from './slides/23-Masters';
import AssetManagement from './slides/23b-AssetManagement';
import Property from './slides/23c-Property';
import SecurityHero from './slides/24a-SecurityHero';
import WhyCloud from './slides/24c-WhyCloud';
import SecurityArchitecture from './slides/24b-SecurityArchitecture';
import DiocesePricing from './slides/24d-DiocesePricing';
import DiocesePricingOption2 from './slides/24e-DiocesePricingOption2';
import DioceseROI from './slides/24f-DioceseROI';
import Settings from './slides/25-Settings';
import Pulse from './slides/25b-Pulse';
import MobileApp from './slides/26-MobileApp';
import DioceseHeader from './slides/26b-DioceseHeader';
import DioceseVision from './slides/26c-DioceseVision';
import Assessment from './slides/26d-Assessment';
import DioceseProperty from './slides/26e-DioceseProperty';
import StaffManagement from './slides/26f-StaffManagement';
import DioceseMembers from './slides/26i-DioceseMembers';
import DioceseFinance from './slides/26j-DioceseFinance';
import DioceseTalent from './slides/26k-DioceseTalent';
import DioceseLegal from './slides/26l-DioceseLegal';
import OnboardingDiocese from './slides/30-OnboardingDiocese';
import OnboardingChurch from './slides/31-OnboardingChurch';
import DioceseClose from './slides/26h-DioceseClose';
import PricingHeader from './slides/27a-PricingHeader';
import PricingStory from './slides/27b-PricingStory';
import Pricing from './slides/27-Pricing';
import Setup from './slides/28-Setup';
import Closing from './slides/29-Closing';

const slides = [
  { component: Hero, title: 'Hero' },
  { component: Story, title: 'Our Story' },
  { component: HowItWorks, title: 'How It Works Today' },
  { component: ThePain, title: 'The Pain' },
  { component: WhatIf, title: 'What If?' },
  { component: ChurchBellIntro, title: 'ChurchBell' },
  { component: PeopleHeader, title: 'People' },
  { component: Members, title: 'Members' },
  { component: SpecialDates, title: 'Special Dates' },
  { component: Groups, title: 'Groups' },
  { component: Committee, title: 'Committee' },
  { component: VoterList, title: 'Voter List' },
  { component: MemberReports, title: 'Member Reports' },
  { component: FinanceHeader, title: 'Finance' },
  { component: Transactions, title: 'Transactions' },
  { component: WhatsAppReceipt, title: 'WhatsApp Receipt' },
  { component: KeyboardShortcuts, title: 'Shortcuts' },
  { component: Auction, title: 'Auction' },
  { component: ServiceRegister, title: 'Service Register' },
  { component: OpeningBalance, title: 'Opening Balance' },
  { component: ReportsHeader, title: 'Reports' },
  { component: Reports, title: 'Report Types' },
  { component: DefaultersStatements, title: 'Defaulters' },
  { component: SubscriptionCard, title: 'Subscription Card' },
  { component: RecordsHeader, title: 'Records' },
  { component: Records, title: 'Records Detail' },
  { component: Masters, title: 'Masters' },
  { component: AssetManagement, title: 'Asset Management' },
  { component: Property, title: 'Property & Rent' },
  { component: Settings, title: 'Settings' },
  { component: Pulse, title: 'Pulse' },
  { component: MobileApp, title: 'Mobile App' },
  { component: Setup, title: 'Setup' },
  { component: PricingHeader, title: 'Pricing' },
  { component: PricingStory, title: 'Pricing Story' },
  { component: Pricing, title: 'Pricing Details' },
  { component: DioceseHeader, title: 'Diocese' },
  { component: DioceseVision, title: 'Diocese Vision' },
  { component: DioceseMembers, title: 'Diocese Members' },
  { component: Assessment, title: 'Assessment' },
  { component: DioceseFinance, title: 'Diocese Finance' },
  { component: StaffManagement, title: 'Workforce' },
  { component: DioceseTalent, title: 'Talent Acquisition' },
  { component: DioceseLegal, title: 'Legal' },
  { component: DioceseProperty, title: 'Diocese Property' },
  { component: OnboardingDiocese, title: 'Onboarding — Diocese' },
  { component: OnboardingChurch, title: 'Onboarding — Church' },
  { component: SecurityHero, title: 'Security' },
  { component: WhyCloud, title: 'Cloud vs On-Premise' },
  { component: SecurityArchitecture, title: 'Architecture' },
  { component: DiocesePricingOption2, title: 'Pricing — Option 1' },
  { component: DiocesePricing, title: 'Pricing — Option 2' },
  { component: DioceseROI, title: 'ROI — Church Savings' },
  { component: DioceseClose, title: 'Diocese CTA' },
  { component: Closing, title: 'Closing' },
];

function App() {
  const nav = useSlideNavigation(slides.length);
  const CurrentSlide = slides[nav.currentSlide].component;

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#fff' }}>
      <Background3D />

      {/* Watermark logo — bottom left */}
      <img
        src="/images/logo-color.png"
        alt=""
        style={{
          position: 'fixed',
          bottom: 20,
          left: 24,
          height: 32,
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 50,
        }}
      />

      <SlideLayout slideKey={nav.currentSlide} direction={nav.direction}>
        <CurrentSlide />
      </SlideLayout>

      <SlideNav
        currentSlide={nav.currentSlide}
        totalSlides={nav.totalSlides}
        progress={nav.progress}
        onPrev={nav.prev}
        onNext={nav.next}
      />

      {/* Number jump indicator */}
      <AnimatePresence>
        {nav.numberBuffer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              top: 24,
              right: 24,
              zIndex: 400,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '2px solid var(--primary)',
              borderRadius: 16,
              padding: '14px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              boxShadow: '0 8px 32px rgba(115, 103, 240, 0.2)',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Go to Slide
            </span>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
              {nav.numberBuffer}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav.showDrawer && (
          <SlideDrawer
            slides={slides}
            currentSlide={nav.currentSlide}
            onSelect={nav.goTo}
            onClose={() => nav.setShowDrawer(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav.showOverview && (
          <SlideOverview
            slides={slides}
            currentSlide={nav.currentSlide}
            onSelect={nav.goTo}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
