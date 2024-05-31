// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
//Importacion de los iconos a usar
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  //Aqui se colocan las const para almacenar los icones desde aqui son para cada estructura
  AccountBalanceOutlinedIcon: AccountBalanceOutlinedIcon,
  SavingsOutlinedIcon: SavingsOutlinedIcon,
  Diversity3OutlinedIcon: Diversity3OutlinedIcon,
  VerifiedOutlinedIcon: VerifiedOutlinedIcon,
  PaidOutlinedIcon: PaidOutlinedIcon,
  BalanceOutlinedIcon: BalanceOutlinedIcon,
  AutoStoriesOutlinedIcon: AutoStoriesOutlinedIcon,
  TravelExploreOutlinedIcon: TravelExploreOutlinedIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'UPROCACH',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Inicio',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/sample-page'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Estructuras',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'sample-page',
          title: 'Estados Financieros Mensual',
          type: 'collapse',
          icon: icons['ChromeReaderModeOutlinedIcon'],
          children: [
            {
              id: '',
              title: 'Descriptivo',
              type: 'item',
              url: '/B11/Ind1',
              target: false
            },
            {
              id: '',
              title: 'Indicadores',
              type: 'item',
              url: '/B11/Ind2',
              target: false
            }
          ]
        },
        /*{
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'Login',
              type: 'item',
              url: '/application/login',
              target: true
            },
            {
              id: 'register',
              title: 'Register',
              type: 'item',
              url: '/application/register',
              target: true
            }
          ]
        },*/
        {
          id: 'auth',
          title: 'Dépositos',
          type: 'collapse',
          icon: icons['SavingsOutlinedIcon'],
          children: [
            {
              id: '',
              title: 'Descriptivo',
              type: 'item',
              url: '/D01/Ind1',
              target: false
            },
            {
              id: '',
              title: 'Indicadores',
              type: 'item',
              url: '/D01/Ind2',
              target: false
            }
          ]
        },
        {
          id: 'auth',
          title: 'Socios',
          type: 'collapse',
          icon: icons['Diversity3OutlinedIcon'],
          children: [
            {
              id: '',
              title: 'Descriptivo',
              type: 'item',
              url: '/S01/Ind1',
              target: false
            },
            {
              id: '',
              title: 'Indicadores',
              type: 'item',
              url: '/S01/Ind2',
              target: false
            }
          ]
        },
        {
          id: 'auth',
          title: 'Operaciones concedidas',
          type: 'collapse',
          icon: icons['VerifiedOutlinedIcon'],
          children: [
            {
              id: '',
              title: 'Descriptivo',
              type: 'item',
              url: '/C01-1/Ind1',
              target: false
            },
            {
              id: '',
              title: 'Indicadores',
              type: 'item',
              url: '/C01-2/Ind2',
              target: false
            }
          ]
        },
        {
          id: 'auth',
          title: 'Saldos de operaciones',
          type: 'collapse',
          icon: icons['PaidOutlinedIcon'],
          children: [
            {
              id: '',
              title: 'Descriptivo',
              type: 'item',
              url: '/C02-1/Ind1',
              target: false
            },
            {
              id: '',
              title: 'Indicadores',
              type: 'item',
              url: '/C02-2/Ind2',
              target: false
            }
          ]
        },
        {
          id: 'auth',
          title: 'Liquidez estructural',
          type: 'collapse',
          icon: icons['BalanceOutlinedIcon'],
          children: [
            {
              id: '',
              title: 'Descriptivo',
              type: 'item',
              url: '/L01/Ind1',
              target: false
            },
            {
              id: '',
              title: 'Indicadores',
              type: 'item',
              url: '/L01/Ind2',
              target: false
            }
          ]
        }
      ]
    },
    {
      id: 'support',
      title: 'Soporte',
      type: 'group',
      icon: icons['ContactSupportOutlinedIcon'],
      children: [
        {
          id: '',
          title: 'Manual de uso',
          type: 'item',
          url: '#',
          icon: icons['AutoStoriesOutlinedIcon'],
          disabled: false
        },
        {
          id: 'documentation',
          title: 'Uprocach',
          type: 'item',
          url: 'https://uprocach.odoo.com/',
          icon: icons['TravelExploreOutlinedIcon'],
          chip: {
            label: 'Clic Aqui!',
            color: 'primary'
          },
          external: true,
          target: true
        }
      ]
    }
  ]
};
