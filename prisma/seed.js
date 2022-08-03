import Client from '@prisma/client'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

const prisma = new Client.PrismaClient()

const teams = {
  URU_national: {
    connectOrCreate: {
      create: {
        code3: 'URU',
        type: 'national',
        name: 'Uruguay',
        code2: 'uy',
        codeNum: '858',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'URU',
          type: 'national'
        }
      }
    }
  },
  QAT_national: {
    connectOrCreate: {
      create: {
        code3: 'QAT',
        type: 'national',
        name: 'Qatar',
        code2: 'qa',
        codeNum: '634',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'QAT',
          type: 'national'
        }
      }
    }
  },
  ECU_national: {
    connectOrCreate: {
      create: {
        code3: 'ECU',
        type: 'national',
        name: 'Ecuador',
        code2: 'ec',
        codeNum: '218',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ECU',
          type: 'national'
        }
      }
    }
  },
  SEN_national: {
    connectOrCreate: {
      create: {
        code3: 'SEN',
        type: 'national',
        name: 'Senegal',
        code2: 'sn',
        codeNum: '686',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SEN',
          type: 'national'
        }
      }
    }
  },
  NED_national: {
    connectOrCreate: {
      create: {
        code3: 'NED',
        type: 'national',
        name: 'Netherlands',
        code2: 'nl',
        codeNum: '528',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'NED',
          type: 'national'
        }
      }
    }
  },
  ENG_national: {
    connectOrCreate: {
      create: {
        code3: 'ENG',
        type: 'national',
        name: 'England',
        code2: 'gb-eng',
        codeNum: '826',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ENG',
          type: 'national'
        }
      }
    }
  },
  IRN_national: {
    connectOrCreate: {
      create: {
        code3: 'IRN',
        type: 'national',
        name: 'Iran',
        code2: 'ir',
        codeNum: '364',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'IRN',
          type: 'national'
        }
      }
    }
  },
  USA_national: {
    connectOrCreate: {
      create: {
        code3: 'USA',
        type: 'national',
        name: 'United States',
        code2: 'us',
        codeNum: '840',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'USA',
          type: 'national'
        }
      }
    }
  },
  WAL_national: {
    connectOrCreate: {
      create: {
        code3: 'WAL',
        type: 'national',
        name: 'Wales',
        code2: 'gb-wls',
        codeNum: '840',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'WAL',
          type: 'national'
        }
      }
    }
  },
  ARG_national: {
    connectOrCreate: {
      create: {
        code3: 'ARG',
        type: 'national',
        name: 'Argentina',
        code2: 'ar',
        codeNum: '032',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ARG',
          type: 'national'
        }
      }
    }
  },
  KSA_national: {
    connectOrCreate: {
      create: {
        code3: 'KSA',
        type: 'national',
        name: 'Saudi Arabia',
        code2: 'sa',
        codeNum: '682',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'KSA',
          type: 'national'
        }
      }
    }
  },
  MEX_national: {
    connectOrCreate: {
      create: {
        code3: 'MEX',
        type: 'national',
        name: 'Mexico',
        code2: 'mx',
        codeNum: '484',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'MEX',
          type: 'national'
        }
      }
    }
  },
  POL_national: {
    connectOrCreate: {
      create: {
        code3: 'POL',
        type: 'national',
        name: 'Poland',
        code2: 'pl',
        codeNum: '616',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'POL',
          type: 'national'
        }
      }
    }
  },
  FRA_national: {
    connectOrCreate: {
      create: {
        code3: 'FRA',
        type: 'national',
        name: 'France',
        code2: 'fr',
        codeNum: '250',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'FRA',
          type: 'national'
        }
      }
    }
  },
  AUS_national: {
    connectOrCreate: {
      create: {
        code3: 'AUS',
        type: 'national',
        name: 'Australia',
        code2: 'au',
        codeNum: '036',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'AUS',
          type: 'national'
        }
      }
    }
  },
  DEN_national: {
    connectOrCreate: {
      create: {
        code3: 'DEN',
        type: 'national',
        name: 'Denmark',
        code2: 'dk',
        codeNum: '208',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'DEN',
          type: 'national'
        }
      }
    }
  },
  TUN_national: {
    connectOrCreate: {
      create: {
        code3: 'TUN',
        type: 'national',
        name: ' Tunisia',
        code2: 'tn',
        codeNum: '788',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'TUN',
          type: 'national'
        }
      }
    }
  },
  ESP_national: {
    connectOrCreate: {
      create: {
        code3: 'ESP',
        type: 'national',
        name: 'Spain',
        code2: 'es',
        codeNum: '724',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ESP',
          type: 'national'
        }
      }
    }
  },
  CRC_national: {
    connectOrCreate: {
      create: {
        code3: 'CRC',
        type: 'national',
        name: 'Costa Rica',
        code2: 'cr',
        codeNum: '188',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CRC',
          type: 'national'
        }
      }
    }
  },
  GER_national: {
    connectOrCreate: {
      create: {
        code3: 'GER',
        type: 'national',
        name: 'Germany',
        code2: 'de',
        codeNum: '276',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'GER',
          type: 'national'
        }
      }
    }
  },
  JPN_national: {
    connectOrCreate: {
      create: {
        code3: 'JPN',
        type: 'national',
        name: 'Japan',
        code2: 'jp',
        codeNum: '392',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'JPN',
          type: 'national'
        }
      }
    }
  },
  BEL_national: {
    connectOrCreate: {
      create: {
        code3: 'BEL',
        type: 'national',
        name: 'Belgium',
        code2: 'be',
        codeNum: '056',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'BEL',
          type: 'national'
        }
      }
    }
  },
  CAN_national: {
    connectOrCreate: {
      create: {
        code3: 'CAN',
        type: 'national',
        name: 'Canada',
        code2: 'ca',
        codeNum: '124',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CAN',
          type: 'national'
        }
      }
    }
  },
  MAR_national: {
    connectOrCreate: {
      create: {
        code3: 'MAR',
        type: 'national',
        name: 'Morocco',
        code2: 'ma',
        codeNum: '504',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'MAR',
          type: 'national'
        }
      }
    }
  },
  CRO_national: {
    connectOrCreate: {
      create: {
        code3: 'CRO',
        type: 'national',
        name: 'Croatia',
        code2: 'hr',
        codeNum: '191',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CRO',
          type: 'national'
        }
      }
    }
  },
  BRA_national: {
    connectOrCreate: {
      create: {
        code3: 'BRA',
        type: 'national',
        name: 'Brazil',
        code2: 'br',
        codeNum: '076',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'BRA',
          type: 'national'
        }
      }
    }
  },
  SRB_national: {
    connectOrCreate: {
      create: {
        code3: 'SRB',
        type: 'national',
        name: 'Serbia',
        code2: 'rs',
        codeNum: '688',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SRB',
          type: 'national'
        }
      }
    }
  },
  SUI_national: {
    connectOrCreate: {
      create: {
        code3: 'SUI',
        type: 'national',
        name: 'Switzerland',
        code2: 'ch',
        codeNum: '756',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SUI',
          type: 'national'
        }
      }
    }
  },
  CMR_national: {
    connectOrCreate: {
      create: {
        code3: 'CMR',
        type: 'national',
        name: 'Cameroon',
        code2: 'cm',
        codeNum: '120',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CMR',
          type: 'national'
        }
      }
    }
  },
  POR_national: {
    connectOrCreate: {
      create: {
        code3: 'POR',
        type: 'national',
        name: 'Portugal',
        code2: 'pt',
        codeNum: '616',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'POR',
          type: 'national'
        }
      }
    }
  },
  GHA_national: {
    connectOrCreate: {
      create: {
        code3: 'GHA',
        type: 'national',
        name: 'Ghana',
        code2: 'gh',
        codeNum: '288',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'GHA',
          type: 'national'
        }
      }
    }
  },
  KOR_national: {
    connectOrCreate: {
      create: {
        code3: 'KOR',
        type: 'national',
        name: 'South Korea',
        code2: 'kr',
        codeNum: '410',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'KOR',
          type: 'national'
        }
      }
    }
  },
  RUS_national: {
    connectOrCreate: {
      create: {
        code3: 'RUS',
        type: 'national',
        name: 'Russia',
        code2: 'ru',
        codeNum: '643',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'RUS',
          type: 'national'
        }
      }
    }
  },
  EGY_national: {
    connectOrCreate: {
      create: {
        code3: 'EGY',
        type: 'national',
        name: 'Egypt',
        code2: 'eg',
        codeNum: '818',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'EGY',
          type: 'national'
        }
      }
    }
  },
  PER_national: {
    connectOrCreate: {
      create: {
        code3: 'PER',
        type: 'national',
        name: 'Peru',
        code2: 'pe',
        codeNum: '604',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'PER',
          type: 'national'
        }
      }
    }
  },
  NGA_national: {
    connectOrCreate: {
      create: {
        code3: 'NGA',
        type: 'national',
        name: 'Nigeria',
        code2: 'ng',
        codeNum: '566',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'NGA',
          type: 'national'
        }
      }
    }
  },
  ISL_national: {
    connectOrCreate: {
      create: {
        code3: 'ISL',
        type: 'national',
        name: ' Iceland',
        code2: 'is',
        codeNum: '352',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ISL',
          type: 'national'
        }
      }
    }
  },
  SWE_national: {
    connectOrCreate: {
      create: {
        code3: 'SWE',
        type: 'national',
        name: 'Sweden',
        code2: 'se',
        codeNum: '752',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SWE',
          type: 'national'
        }
      }
    }
  },
  PAN_national: {
    connectOrCreate: {
      create: {
        code3: 'PAN',
        type: 'national',
        name: 'Panama',
        code2: 'pa',
        codeNum: '591',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'PAN',
          type: 'national'
        }
      }
    }
  },
  COL_national: {
    connectOrCreate: {
      create: {
        code3: 'COL',
        type: 'national',
        name: 'Colombia',
        code2: 'co',
        codeNum: '170',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'COL',
          type: 'national'
        }
      }
    }
  },
  ITA_national: {
    connectOrCreate: {
      create: {
        code3: 'ITA',
        type: 'national',
        name: 'Italy',
        code2: 'it',
        codeNum: '380',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ITA',
          type: 'national'
        }
      }
    }
  },
  TUR_national: {
    connectOrCreate: {
      create: {
        code3: 'TUR',
        type: 'national',
        name: 'Turkey',
        code2: 'tr',
        codeNum: '792',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'TUR',
          type: 'national'
        }
      }
    }
  },
  FIN_national: {
    connectOrCreate: {
      create: {
        code3: 'FIN',
        type: 'national',
        name: 'Finland',
        code2: 'fi',
        codeNum: '246',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'FIN',
          type: 'national'
        }
      }
    }
  },
  AUT_national: {
    connectOrCreate: {
      create: {
        code3: 'AUT',
        type: 'national',
        name: 'Austria',
        code2: 'at',
        codeNum: '040',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'AUT',
          type: 'national'
        }
      }
    }
  },
  UKR_national: {
    connectOrCreate: {
      create: {
        code3: 'UKR',
        type: 'national',
        name: 'Ukraine',
        code2: 'ua',
        codeNum: '804',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'UKR',
          type: 'national'
        }
      }
    }
  },
  MKD_national: {
    connectOrCreate: {
      create: {
        code3: 'MKD',
        type: 'national',
        name: 'North Macedonia',
        code2: 'mk',
        codeNum: '807',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'MKD',
          type: 'national'
        }
      }
    }
  },
  CZE_national: {
    connectOrCreate: {
      create: {
        code3: 'CZE',
        type: 'national',
        name: 'Czech',
        code2: 'cz',
        codeNum: '203',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CZE',
          type: 'national'
        }
      }
    }
  },
  SCO_national: {
    connectOrCreate: {
      create: {
        code3: 'SCO',
        type: 'national',
        name: 'Scotland',
        code2: 'gb-sct',
        codeNum: '826',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SCO',
          type: 'national'
        }
      }
    }
  },
  SVK_national: {
    connectOrCreate: {
      create: {
        code3: 'SVK',
        type: 'national',
        name: 'Slovakia',
        code2: 'sk',
        codeNum: '703',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SVK',
          type: 'national'
        }
      }
    }
  },
  HUN_national: {
    connectOrCreate: {
      create: {
        code3: 'HUN',
        type: 'national',
        name: 'Hungary',
        code2: 'hu',
        codeNum: '348',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'HUN',
          type: 'national'
        }
      }
    }
  },
  ALB_national: {
    connectOrCreate: {
      create: {
        code3: 'ALB',
        type: 'national',
        name: 'Albania',
        code2: 'al',
        codeNum: '008',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ALB',
          type: 'national'
        }
      }
    }
  },
  ROU_national: {
    connectOrCreate: {
      create: {
        code3: 'ROU',
        type: 'national',
        name: 'Romania',
        code2: 'ro',
        codeNum: '642',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ROU',
          type: 'national'
        }
      }
    }
  },
  NIR_national: {
    connectOrCreate: {
      create: {
        code3: 'NIR',
        type: 'national',
        name: 'North Ireland',
        code2: 'gb-nir',
        codeNum: '826',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'NIR',
          type: 'national'
        }
      }
    }
  },
  IRL_national: {
    connectOrCreate: {
      create: {
        code3: 'IRL',
        type: 'national',
        name: 'Ireland',
        code2: 'ie',
        codeNum: '372',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'IRL',
          type: 'national'
        }
      }
    }
  },
  CHI_national: {
    connectOrCreate: {
      create: {
        code3: 'CHI',
        type: 'national',
        name: 'Chile',
        code2: 'cl',
        codeNum: '152',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CHI',
          type: 'national'
        }
      }
    }
  },
  GRE_national: {
    connectOrCreate: {
      create: {
        code3: 'GRE',
        type: 'national',
        name: 'Greece',
        code2: 'gr',
        codeNum: '300',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'GRE',
          type: 'national'
        }
      }
    }
  },
  CIV_national: {
    connectOrCreate: {
      create: {
        code3: 'CIV',
        type: 'national',
        name: 'Ivory Coast',
        code2: 'ci',
        codeNum: '384',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CIV',
          type: 'national'
        }
      }
    }
  },
  HON_national: {
    connectOrCreate: {
      create: {
        code3: 'HON',
        type: 'national',
        name: 'Honduras',
        code2: 'hn',
        codeNum: '340',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'HON',
          type: 'national'
        }
      }
    }
  },
  BIH_national: {
    connectOrCreate: {
      create: {
        code3: 'BIH',
        type: 'national',
        name: 'Bosnia and Herzegovina',
        code2: 'ba',
        codeNum: '070',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'BIH',
          type: 'national'
        }
      }
    }
  },
  RSA_national: {
    connectOrCreate: {
      create: {
        code3: 'RSA',
        type: 'national',
        name: 'South Africa',
        code2: 'za',
        codeNum: '710',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'RSA',
          type: 'national'
        }
      }
    }
  },
  ALG_national: {
    connectOrCreate: {
      create: {
        code3: 'ALG',
        type: 'national',
        name: 'Algeria',
        code2: 'dz',
        codeNum: '012',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ALG',
          type: 'national'
        }
      }
    }
  },
  SVN_national: {
    connectOrCreate: {
      create: {
        code3: 'SVN',
        type: 'national',
        name: 'Slovenia',
        code2: 'si',
        codeNum: '705',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SVN',
          type: 'national'
        }
      }
    }
  },
  PAR_national: {
    connectOrCreate: {
      create: {
        code3: 'PAR',
        type: 'national',
        name: 'Paraguay',
        code2: 'py',
        codeNum: '705',
        confederation: {
          connect: {
            code: 'CONMEBOL'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'PAR',
          type: 'national'
        }
      }
    }
  },
  NZL_national: {
    connectOrCreate: {
      create: {
        code3: 'NZL',
        type: 'national',
        name: 'New Zealand',
        code2: 'nz',
        codeNum: '554',
        confederation: {
          connect: {
            code: 'OFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'NZL',
          type: 'national'
        }
      }
    }
  },
  PRK_national: {
    connectOrCreate: {
      create: {
        code3: 'PRK',
        type: 'national',
        name: 'North Korea',
        code2: 'kp',
        codeNum: '408',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'PRK',
          type: 'national'
        }
      }
    }
  },
  TRI_national: {
    connectOrCreate: {
      create: {
        code3: 'TRI',
        type: 'national',
        name: 'Trinidad and Tobago',
        code2: 'tt',
        codeNum: '780',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'TRI',
          type: 'national'
        }
      }
    }
  },
  SCG_national: {
    connectOrCreate: {
      create: {
        code3: 'SCG',
        type: 'national',
        name: 'Serbia and Montenegro',
        code2: 'scg',
        codeNum: '688',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SCG',
          type: 'national'
        }
      }
    }
  },
  ANG_national: {
    connectOrCreate: {
      create: {
        code3: 'ANG',
        type: 'national',
        name: 'Angola',
        code2: 'ao',
        codeNum: '024',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ANG',
          type: 'national'
        }
      }
    }
  },
  TOG_national: {
    connectOrCreate: {
      create: {
        code3: 'TOG',
        type: 'national',
        name: 'Togo',
        code2: 'tg',
        codeNum: '768',
        confederation: {
          connect: {
            code: 'CAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'TOG',
          type: 'national'
        }
      }
    }
  },
  CHN_national: {
    connectOrCreate: {
      create: {
        code3: 'CHN',
        type: 'national',
        name: 'China',
        code2: 'cn',
        codeNum: '156',
        confederation: {
          connect: {
            code: 'AFC'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CHN',
          type: 'national'
        }
      }
    }
  },
  NOR_national: {
    connectOrCreate: {
      create: {
        code3: 'NOR',
        type: 'national',
        name: 'Norway',
        code2: 'no',
        codeNum: '578',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'NOR',
          type: 'national'
        }
      }
    }
  },
  BUL_national: {
    connectOrCreate: {
      create: {
        code3: 'BUL',
        type: 'national',
        name: 'Bulgaria',
        code2: 'bg',
        codeNum: '100',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'BUL',
          type: 'national'
        }
      }
    }
  },
  YUG_national: {
    connectOrCreate: {
      create: {
        code3: 'YUG',
        type: 'national',
        name: 'FR Yugoslavia',
        code2: 'yug',
        codeNum: '688',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'YUG',
          type: 'national'
        }
      }
    }
  },
  JAM_national: {
    connectOrCreate: {
      create: {
        code3: 'JAM',
        type: 'national',
        name: 'Jamaica',
        code2: 'jm',
        codeNum: '388',
        confederation: {
          connect: {
            code: 'CONCACAF'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'JAM',
          type: 'national'
        }
      }
    }
  },
  LVA_national: {
    connectOrCreate: {
      create: {
        code3: 'LVA',
        type: 'national',
        name: 'Latvia',
        code2: 'lv',
        codeNum: '428',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'LVA',
          type: 'national'
        }
      }
    }
  },
  ARM_national: {
    connectOrCreate: {
      create: {
        code3: 'ARM',
        type: 'national',
        name: 'Armenia',
        code2: 'am',
        codeNum: '051',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ARM',
          type: 'national'
        }
      }
    }
  },
  ISR_national: {
    connectOrCreate: {
      create: {
        code3: 'ISR',
        type: 'national',
        name: 'Israel',
        code2: 'il',
        codeNum: '376',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'ISR',
          type: 'national'
        }
      }
    }
  },
  MNE_national: {
    connectOrCreate: {
      create: {
        code3: 'MNE',
        type: 'national',
        name: 'Montenegro',
        code2: 'me',
        codeNum: '499',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'MNE',
          type: 'national'
        }
      }
    }
  },
  LUX_national: {
    connectOrCreate: {
      create: {
        code3: 'LUX',
        type: 'national',
        name: 'Luxembourg',
        code2: 'lu',
        codeNum: '442',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'LUX',
          type: 'national'
        }
      }
    }
  },
  LTU_national: {
    connectOrCreate: {
      create: {
        code3: 'LTU',
        type: 'national',
        name: 'Lithuania',
        code2: 'lt',
        codeNum: '440',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'LTU',
          type: 'national'
        }
      }
    }
  },
  FRO_national: {
    connectOrCreate: {
      create: {
        code3: 'FRO',
        type: 'national',
        name: 'Faroe Islands',
        code2: 'fo',
        codeNum: '234',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'FRO',
          type: 'national'
        }
      }
    }
  },
  KOS_national: {
    connectOrCreate: {
      create: {
        code3: 'KOS',
        type: 'national',
        name: 'Kosovo',
        code2: 'xk',
        codeNum: '',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'KOS',
          type: 'national'
        }
      }
    }
  },
  CYP_national: {
    connectOrCreate: {
      create: {
        code3: 'CYP',
        type: 'national',
        name: 'Cyprus',
        code2: 'cy',
        codeNum: '',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'CYP',
          type: 'national'
        }
      }
    }
  },
  KAZ_national: {
    connectOrCreate: {
      create: {
        code3: 'KAZ',
        type: 'national',
        name: 'Kazakhstan',
        code2: 'kz',
        codeNum: '398',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'KAZ',
          type: 'national'
        }
      }
    }
  },
  AZE_national: {
    connectOrCreate: {
      create: {
        code3: 'AZE',
        type: 'national',
        name: 'Azerbaijan',
        code2: 'az',
        codeNum: '031',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'AZE',
          type: 'national'
        }
      }
    }
  },
  BLR_national: {
    connectOrCreate: {
      create: {
        code3: 'BLR',
        type: 'national',
        name: 'Belarus',
        code2: 'by',
        codeNum: '112',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'BLR',
          type: 'national'
        }
      }
    }
  },
  GEO_national: {
    connectOrCreate: {
      create: {
        code3: 'GEO',
        type: 'national',
        name: 'Georgia',
        code2: 'ge',
        codeNum: '268',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'GEO',
          type: 'national'
        }
      }
    }
  },
  GIB_national: {
    connectOrCreate: {
      create: {
        code3: 'GIB',
        type: 'national',
        name: 'Gibraltar',
        code2: 'gi',
        codeNum: '292',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'GIB',
          type: 'national'
        }
      }
    }
  },
  MDA_national: {
    connectOrCreate: {
      create: {
        code3: 'MDA',
        type: 'national',
        name: 'Moldova',
        code2: 'md',
        codeNum: '498',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'MDA',
          type: 'national'
        }
      }
    }
  },
  AND_national: {
    connectOrCreate: {
      create: {
        code3: 'AND',
        type: 'national',
        name: 'Andorra',
        code2: 'ad',
        codeNum: '020',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'AND',
          type: 'national'
        }
      }
    }
  },
  LIE_national: {
    connectOrCreate: {
      create: {
        code3: 'LIE',
        type: 'national',
        name: 'Liechtenstein',
        code2: 'li',
        codeNum: '438',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'LIE',
          type: 'national'
        }
      }
    }
  },
  EST_national: {
    connectOrCreate: {
      create: {
        code3: 'EST',
        type: 'national',
        name: 'Estonia',
        code2: 'ee',
        codeNum: '233',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'EST',
          type: 'national'
        }
      }
    }
  },
  MLT_national: {
    connectOrCreate: {
      create: {
        code3: 'MLT',
        type: 'national',
        name: 'Malta',
        code2: 'mt',
        codeNum: '470',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'MLT',
          type: 'national'
        }
      }
    }
  },
  SMR_national: {
    connectOrCreate: {
      create: {
        code3: 'SMR',
        type: 'national',
        name: 'San Marino',
        code2: 'sm',
        codeNum: '674',
        confederation: {
          connect: {
            code: 'UEFA'
          }
        }
      },
      where: {
        code3_type: {
          code3: 'SMR',
          type: 'national'
        }
      }
    }
  }
}

const genUsers = async () => {
  const promises = []

  await prisma.user.deleteMany({})
  for (let i = 0; i < 10; i += 1) {
    promises.push(prisma.user.create({
      data: {
        email: faker.internet.email(),
        // eslint-disable-next-line no-await-in-loop
        passwordHash: await bcrypt.hash('123456', 10),
        profile: {
          create: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            country: faker.address.countryCode('alpha-2'),
            avatar: faker.image.avatar()
          }
        }
      }
    }))
  }

  await Promise.all(promises)
}

const genConfederations = async () => {
  const promises = []
  const confederationsList = [
    ['FIFA', '', ''],
    ['UEFA', '', ''],
    ['CONMEBOL', '', ''],
    ['CONCACAF', '', ''],
    ['CAF', '', ''],
    ['AFC', '', ''],
    ['OFC', '', '']
  ]

  await prisma.confederation.deleteMany({})
  for (let i = 0; i < confederationsList.length; i += 1) {
    promises.push(prisma.confederation.create({
      data: {
        code: confederationsList[i][0],
        logo: confederationsList[i][1],
        map: confederationsList[i][2]
      }
    }))
  }

  await Promise.all(promises)
}

const clearTournament = async () => {
  await prisma.tournament.deleteMany({})
  await prisma.team.deleteMany({})
}

const genWorldCup2022 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '2022',
    host: 'Qatar',
    edition: '22',
    logo: 'kxIATzw.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.QAT_national
              }, {
                order: 2,
                team: teams.ECU_national
              }, {
                order: 3,
                team: teams.SEN_national
              }, {
                order: 4,
                team: teams.NED_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ENG_national
              }, {
                order: 2,
                team: teams.IRN_national
              }, {
                order: 3,
                team: teams.USA_national
              }, {
                order: 4,
                team: teams.WAL_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ARG_national
              }, {
                order: 2,
                team: teams.KSA_national
              }, {
                order: 3,
                team: teams.MEX_national
              }, {
                order: 4,
                team: teams.POL_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.AUS_national
              }, {
                order: 3,
                team: teams.DEN_national
              }, {
                order: 4,
                team: teams.TUN_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.CRC_national
              }, {
                order: 3,
                team: teams.GER_national
              }, {
                order: 4,
                team: teams.JPN_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BEL_national
              }, {
                order: 2,
                team: teams.CAN_national
              }, {
                order: 3,
                team: teams.MAR_national
              }, {
                order: 4,
                team: teams.CRO_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.SRB_national
              }, {
                order: 3,
                team: teams.SUI_national
              }, {
                order: 4,
                team: teams.CMR_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.GHA_national
              }, {
                order: 3,
                team: teams.URU_national
              }, {
                order: 4,
                team: teams.KOR_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genWorldCup2018 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '2018',
    host: 'Russia',
    edition: '21',
    logo: 'BrWXqsF.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.URU_national
              }, {
                order: 2,
                team: teams.RUS_national
              }, {
                order: 3,
                team: teams.KSA_national
              }, {
                order: 4,
                team: teams.EGY_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.POR_national
              }, {
                order: 3,
                team: teams.IRN_national
              }, {
                order: 4,
                team: teams.MAR_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.DEN_national
              }, {
                order: 3,
                team: teams.PER_national
              }, {
                order: 4,
                team: teams.AUS_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CRO_national
              }, {
                order: 2,
                team: teams.ARG_national
              }, {
                order: 3,
                team: teams.NGA_national
              }, {
                order: 4,
                team: teams.ISL_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.SUI_national
              }, {
                order: 3,
                team: teams.SRB_national
              }, {
                order: 4,
                team: teams.CRC_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SWE_national
              }, {
                order: 2,
                team: teams.MEX_national
              }, {
                order: 3,
                team: teams.KOR_national
              }, {
                order: 4,
                team: teams.GER_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BEL_national
              }, {
                order: 2,
                team: teams.ENG_national
              }, {
                order: 3,
                team: teams.TUN_national
              }, {
                order: 4,
                team: teams.PAN_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.COL_national
              }, {
                order: 2,
                team: teams.JPN_national
              }, {
                order: 3,
                team: teams.SEN_national
              }, {
                order: 4,
                team: teams.POL_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genWorldCup2014 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '2014',
    host: 'Brazil',
    edition: '20',
    logo: 'jDNyy2d.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.MEX_national
              }, {
                order: 3,
                team: teams.CRO_national
              }, {
                order: 4,
                team: teams.CMR_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.CHI_national
              }, {
                order: 3,
                team: teams.ESP_national
              }, {
                order: 4,
                team: teams.AUS_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.COL_national
              }, {
                order: 2,
                team: teams.GRE_national
              }, {
                order: 3,
                team: teams.CIV_national
              }, {
                order: 4,
                team: teams.JPN_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CRC_national
              }, {
                order: 2,
                team: teams.URU_national
              }, {
                order: 3,
                team: teams.ITA_national
              }, {
                order: 4,
                team: teams.ENG_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.SUI_national
              }, {
                order: 3,
                team: teams.ECU_national
              }, {
                order: 4,
                team: teams.HON_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ARG_national
              }, {
                order: 2,
                team: teams.NGA_national
              }, {
                order: 3,
                team: teams.BIH_national
              }, {
                order: 4,
                team: teams.IRN_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.USA_national
              }, {
                order: 3,
                team: teams.POR_national
              }, {
                order: 4,
                team: teams.GHA_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BEL_national
              }, {
                order: 2,
                team: teams.ALG_national
              }, {
                order: 3,
                team: teams.RUS_national
              }, {
                order: 4,
                team: teams.KOR_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genWorldCup2010 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '2010',
    host: 'South Africa',
    edition: '19',
    logo: '79jw7Or.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.URU_national
              }, {
                order: 2,
                team: teams.MEX_national
              }, {
                order: 3,
                team: teams.RSA_national
              }, {
                order: 4,
                team: teams.FRA_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ARG_national
              }, {
                order: 2,
                team: teams.KOR_national
              }, {
                order: 3,
                team: teams.GRE_national
              }, {
                order: 4,
                team: teams.NGA_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.USA_national
              }, {
                order: 2,
                team: teams.ENG_national
              }, {
                order: 3,
                team: teams.SVN_national
              }, {
                order: 4,
                team: teams.ALG_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.GHA_national
              }, {
                order: 3,
                team: teams.AUS_national
              }, {
                order: 4,
                team: teams.SRB_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.JPN_national
              }, {
                order: 3,
                team: teams.DEN_national
              }, {
                order: 4,
                team: teams.CMR_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.PAR_national
              }, {
                order: 2,
                team: teams.SVK_national
              }, {
                order: 3,
                team: teams.NZL_national
              }, {
                order: 4,
                team: teams.ITA_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.POR_national
              }, {
                order: 3,
                team: teams.CIV_national
              }, {
                order: 4,
                team: teams.PRK_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.CHI_national
              }, {
                order: 3,
                team: teams.SUI_national
              }, {
                order: 4,
                team: teams.HON_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genWorldCup2006 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '2006',
    host: 'Germany',
    edition: '18',
    logo: 't776nJb.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.ECU_national
              }, {
                order: 3,
                team: teams.POL_national
              }, {
                order: 4,
                team: teams.CRC_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ENG_national
              }, {
                order: 2,
                team: teams.SWE_national
              }, {
                order: 3,
                team: teams.PAR_national
              }, {
                order: 4,
                team: teams.TRI_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ARG_national
              }, {
                order: 2,
                team: teams.NED_national
              }, {
                order: 3,
                team: teams.CIV_national
              }, {
                order: 4,
                team: teams.SCG_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.MEX_national
              }, {
                order: 3,
                team: teams.ANG_national
              }, {
                order: 4,
                team: teams.IRN_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ITA_national
              }, {
                order: 2,
                team: teams.GHA_national
              }, {
                order: 3,
                team: teams.CZE_national
              }, {
                order: 4,
                team: teams.USA_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.AUS_national
              }, {
                order: 3,
                team: teams.CRO_national
              }, {
                order: 4,
                team: teams.JPN_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SUI_national
              }, {
                order: 2,
                team: teams.FRA_national
              }, {
                order: 3,
                team: teams.KOR_national
              }, {
                order: 4,
                team: teams.TOG_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.UKR_national
              }, {
                order: 3,
                team: teams.TUN_national
              }, {
                order: 4,
                team: teams.KSA_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genWorldCup2002 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '2002',
    host: 'Korea Japan',
    edition: '17',
    logo: 'qA0C2fl.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.DEN_national
              }, {
                order: 2,
                team: teams.SEN_national
              }, {
                order: 3,
                team: teams.URU_national
              }, {
                order: 4,
                team: teams.FRA_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.PAR_national
              }, {
                order: 3,
                team: teams.RSA_national
              }, {
                order: 4,
                team: teams.SVN_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.TUR_national
              }, {
                order: 3,
                team: teams.CRC_national
              }, {
                order: 4,
                team: teams.CHN_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.KOR_national
              }, {
                order: 2,
                team: teams.USA_national
              }, {
                order: 3,
                team: teams.POR_national
              }, {
                order: 4,
                team: teams.POL_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.IRL_national
              }, {
                order: 3,
                team: teams.CMR_national
              }, {
                order: 4,
                team: teams.KSA_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SWE_national
              }, {
                order: 2,
                team: teams.ENG_national
              }, {
                order: 3,
                team: teams.ARG_national
              }, {
                order: 4,
                team: teams.NGA_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.MEX_national
              }, {
                order: 2,
                team: teams.ITA_national
              }, {
                order: 3,
                team: teams.CRO_national
              }, {
                order: 4,
                team: teams.ECU_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.JPN_national
              }, {
                order: 2,
                team: teams.BEL_national
              }, {
                order: 3,
                team: teams.RUS_national
              }, {
                order: 4,
                team: teams.TUN_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genWorldCup1998 = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    year: '1998',
    host: 'France',
    edition: '16',
    logo: 'E7wBiWk.jpg',
    numOfGroups: 8,
    numOfTeams: 32,
    confederation: {
      connect: {
        code: 'FIFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BRA_national
              }, {
                order: 2,
                team: teams.NOR_national
              }, {
                order: 3,
                team: teams.MAR_national
              }, {
                order: 4,
                team: teams.SCO_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ITA_national
              }, {
                order: 2,
                team: teams.CHI_national
              }, {
                order: 3,
                team: teams.AUT_national
              }, {
                order: 4,
                team: teams.CMR_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.DEN_national
              }, {
                order: 3,
                team: teams.RSA_national
              }, {
                order: 4,
                team: teams.KSA_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NGA_national
              }, {
                order: 2,
                team: teams.PAR_national
              }, {
                order: 3,
                team: teams.ESP_national
              }, {
                order: 4,
                team: teams.BUL_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.MEX_national
              }, {
                order: 3,
                team: teams.BEL_national
              }, {
                order: 4,
                team: teams.KOR_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.YUG_national
              }, {
                order: 3,
                team: teams.IRN_national
              }, {
                order: 4,
                team: teams.USA_national
              }
            ]
          }
        }, {
          code: 'G',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ROU_national
              }, {
                order: 2,
                team: teams.ENG_national
              }, {
                order: 3,
                team: teams.COL_national
              }, {
                order: 4,
                team: teams.TUN_national
              }
            ]
          }
        }, {
          code: 'H',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ARG_national
              }, {
                order: 2,
                team: teams.CRO_national
              }, {
                order: 3,
                team: teams.JAM_national
              }, {
                order: 4,
                team: teams.JPN_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro2020 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '2020',
    host: 'Europe',
    edition: '16',
    logo: 'KhaLn7D.png',
    numOfGroups: 6,
    numOfTeams: 24,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ITA_national
              }, {
                order: 2,
                team: teams.WAL_national
              }, {
                order: 3,
                team: teams.SUI_national
              }, {
                order: 4,
                team: teams.TUR_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BEL_national
              }, {
                order: 2,
                team: teams.DEN_national
              }, {
                order: 3,
                team: teams.FIN_national
              }, {
                order: 4,
                team: teams.RUS_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.AUT_national
              }, {
                order: 3,
                team: teams.UKR_national
              }, {
                order: 4,
                team: teams.MKD_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ENG_national
              }, {
                order: 2,
                team: teams.CRO_national
              }, {
                order: 3,
                team: teams.CZE_national
              }, {
                order: 4,
                team: teams.SCO_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SWE_national
              }, {
                order: 2,
                team: teams.ESP_national
              }, {
                order: 3,
                team: teams.SVK_national
              }, {
                order: 4,
                team: teams.POL_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.GER_national
              }, {
                order: 3,
                team: teams.POR_national
              }, {
                order: 4,
                team: teams.HUN_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro2016 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '2016',
    host: 'France',
    edition: '15',
    logo: 'hWZ4sEl.png',
    numOfGroups: 6,
    numOfTeams: 24,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.SUI_national
              }, {
                order: 3,
                team: teams.ALB_national
              }, {
                order: 4,
                team: teams.ROU_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.WAL_national
              }, {
                order: 2,
                team: teams.ENG_national
              }, {
                order: 3,
                team: teams.SVK_national
              }, {
                order: 4,
                team: teams.RUS_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.POL_national
              }, {
                order: 3,
                team: teams.NIR_national
              }, {
                order: 4,
                team: teams.UKR_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CRO_national
              }, {
                order: 2,
                team: teams.ESP_national
              }, {
                order: 3,
                team: teams.TUR_national
              }, {
                order: 4,
                team: teams.CZE_national
              }
            ]
          }
        }, {
          code: 'E',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ITA_national
              }, {
                order: 2,
                team: teams.BEL_national
              }, {
                order: 3,
                team: teams.IRE_national
              }, {
                order: 4,
                team: teams.SWE_national
              }
            ]
          }
        }, {
          code: 'F',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.HUN_national
              }, {
                order: 2,
                team: teams.ISL_national
              }, {
                order: 3,
                team: teams.POR_national
              }, {
                order: 4,
                team: teams.AUT_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro2012 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '2012',
    host: 'Poland Ukraine',
    edition: '14',
    logo: 'V8Wj4hY.png',
    numOfGroups: 4,
    numOfTeams: 16,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CZE_national
              }, {
                order: 2,
                team: teams.GRE_national
              }, {
                order: 3,
                team: teams.RUS_national
              }, {
                order: 4,
                team: teams.POL_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.POR_national
              }, {
                order: 3,
                team: teams.DEN_national
              }, {
                order: 4,
                team: teams.NED_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.ITA_national
              }, {
                order: 3,
                team: teams.CRO_national
              }, {
                order: 4,
                team: teams.IRL_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ENG_national
              }, {
                order: 2,
                team: teams.FRA_national
              }, {
                order: 3,
                team: teams.UKR_national
              }, {
                order: 4,
                team: teams.SWE_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro2008 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '2008',
    host: 'Austria Switzerland',
    edition: '13',
    logo: 'FmlxZO6.png',
    numOfGroups: 4,
    numOfTeams: 16,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.TUR_national
              }, {
                order: 3,
                team: teams.CZE_national
              }, {
                order: 4,
                team: teams.SUI_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CRO_national
              }, {
                order: 2,
                team: teams.GER_national
              }, {
                order: 3,
                team: teams.AUT_national
              }, {
                order: 4,
                team: teams.POL_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.ITA_national
              }, {
                order: 3,
                team: teams.ROU_national
              }, {
                order: 4,
                team: teams.FRA_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.RUS_national
              }, {
                order: 3,
                team: teams.SWE_national
              }, {
                order: 4,
                team: teams.GRE_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro2004 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '2004',
    host: 'Portugal',
    edition: '12',
    logo: 'VzaSTt8.png',
    numOfGroups: 4,
    numOfTeams: 16,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.GRE_national
              }, {
                order: 3,
                team: teams.ESP_national
              }, {
                order: 4,
                team: teams.RUS_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.ENG_national
              }, {
                order: 3,
                team: teams.CRO_national
              }, {
                order: 4,
                team: teams.SUI_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SWE_national
              }, {
                order: 2,
                team: teams.DEN_national
              }, {
                order: 3,
                team: teams.ITA_national
              }, {
                order: 4,
                team: teams.BUL_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CZE_national
              }, {
                order: 2,
                team: teams.NED_national
              }, {
                order: 3,
                team: teams.GER_national
              }, {
                order: 4,
                team: teams.LVA_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro2000 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '2000',
    host: 'Belgium Netherlands',
    edition: '11',
    logo: 'oXSh66W.png',
    numOfGroups: 4,
    numOfTeams: 16,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.ROU_national
              }, {
                order: 3,
                team: teams.ENG_national
              }, {
                order: 4,
                team: teams.GER_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ITA_national
              }, {
                order: 2,
                team: teams.TUR_national
              }, {
                order: 3,
                team: teams.BEL_national
              }, {
                order: 4,
                team: teams.SWE_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.YUG_national
              }, {
                order: 3,
                team: teams.NOR_national
              }, {
                order: 4,
                team: teams.SVN_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.FRA_national
              }, {
                order: 3,
                team: teams.CZE_national
              }, {
                order: 4,
                team: teams.DEN_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genEuro1996 = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'UEFA Euro',
    year: '1996',
    host: 'England',
    edition: '10',
    logo: 'l1Zdcpq.png',
    numOfGroups: 4,
    numOfTeams: 16,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ENG_national
              }, {
                order: 2,
                team: teams.NED_national
              }, {
                order: 3,
                team: teams.SCO_national
              }, {
                order: 4,
                team: teams.SUI_national
              }
            ]
          }
        }, {
          code: 'B',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.ESP_national
              }, {
                order: 3,
                team: teams.BUL_national
              }, {
                order: 4,
                team: teams.ROU_national
              }
            ]
          }
        }, {
          code: 'C',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GER_national
              }, {
                order: 2,
                team: teams.CZE_national
              }, {
                order: 3,
                team: teams.ITA_national
              }, {
                order: 4,
                team: teams.RUS_national
              }
            ]
          }
        }, {
          code: 'D',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.CRO_national
              }, {
                order: 3,
                team: teams.DEN_national
              }, {
                order: 4,
                team: teams.TUR_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genUefaNationsLeague2022to2023 = async () => {
  const tournamentData = {
    code: 'NL',
    name: 'UEFA Nations League',
    year: '2022-2023',
    host: '',
    edition: '3',
    logo: 'pRXWNJy.png',
    numOfGroups: 14,
    numOfTeams: 55,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.DEN_national
              }, {
                order: 2,
                team: teams.CRO_national
              }, {
                order: 3,
                team: teams.AUT_national
              }, {
                order: 4,
                team: teams.FRA_national
              }
            ]
          }
        }, {
          code: 'A2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.POR_national
              }, {
                order: 3,
                team: teams.CZE_national
              }, {
                order: 4,
                team: teams.SUI_national
              }
            ]
          }
        }, {
          code: 'A3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.HUN_national
              }, {
                order: 2,
                team: teams.GER_national
              }, {
                order: 3,
                team: teams.ITA_national
              }, {
                order: 4,
                team: teams.ENG_national
              }
            ]
          }
        }, {
          code: 'A4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.BEL_national
              }, {
                order: 3,
                team: teams.POL_national
              }, {
                order: 4,
                team: teams.WAL_national
              }
            ]
          }
        },
        {
          code: 'B1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.UKR_national
              }, {
                order: 2,
                team: teams.SCO_national
              }, {
                order: 3,
                team: teams.IRL_national
              }, {
                order: 4,
                team: teams.ARM_national
              }
            ]
          }
        }, {
          code: 'B2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ISR_national
              }, {
                order: 2,
                team: teams.ISL_national
              }, {
                order: 3,
                team: teams.ALB_national
              }, {
                order: 4,
                team: teams.RUS_national
              }
            ]
          }
        }, {
          code: 'B3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BIH_national
              }, {
                order: 2,
                team: teams.MNE_national
              }, {
                order: 3,
                team: teams.FIN_national
              }, {
                order: 4,
                team: teams.ROU_national
              }
            ]
          }
        }, {
          code: 'B4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NOR_national
              }, {
                order: 2,
                team: teams.SRB_national
              }, {
                order: 3,
                team: teams.SWE_national
              }, {
                order: 4,
                team: teams.SVN_national
              }
            ]
          }
        },
        {
          code: 'C1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.TUR_national
              }, {
                order: 2,
                team: teams.LUX_national
              }, {
                order: 3,
                team: teams.FRO_national
              }, {
                order: 4,
                team: teams.LTU_national
              }
            ]
          }
        }, {
          code: 'C2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GRE_national
              }, {
                order: 2,
                team: teams.KOS_national
              }, {
                order: 3,
                team: teams.NIR_national
              }, {
                order: 4,
                team: teams.CYP_national
              }
            ]
          }
        }, {
          code: 'C3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.KAZ_national
              }, {
                order: 2,
                team: teams.SVK_national
              }, {
                order: 3,
                team: teams.AZE_national
              }, {
                order: 4,
                team: teams.BLR_national
              }
            ]
          }
        }, {
          code: 'C4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GEO_national
              }, {
                order: 2,
                team: teams.MKD_national
              }, {
                order: 3,
                team: teams.BUL_national
              }, {
                order: 4,
                team: teams.GIB_national
              }
            ]
          }
        },
        {
          code: 'D1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.LVA_national
              }, {
                order: 2,
                team: teams.MDA_national
              }, {
                order: 3,
                team: teams.AND_national
              }, {
                order: 4,
                team: teams.LIE_national
              }
            ]
          }
        }, {
          code: 'D2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.EST_national
              }, {
                order: 2,
                team: teams.MLT_national
              }, {
                order: 3,
                team: teams.SMR_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genUefaNationsLeague2020to2021 = async () => {
  const tournamentData = {
    code: 'NL',
    name: 'UEFA Nations League',
    year: '2020-2021',
    host: '',
    edition: '2',
    logo: '8MdMZ9v.png',
    numOfGroups: 14,
    numOfTeams: 55,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ITA_national
              }, {
                order: 2,
                team: teams.NED_national
              }, {
                order: 3,
                team: teams.POL_national
              }, {
                order: 4,
                team: teams.BIH_national
              }
            ]
          }
        }, {
          code: 'A2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BEL_national
              }, {
                order: 2,
                team: teams.DEN_national
              }, {
                order: 3,
                team: teams.ENG_national
              }, {
                order: 4,
                team: teams.ISL_national
              }
            ]
          }
        }, {
          code: 'A3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRA_national
              }, {
                order: 2,
                team: teams.POR_national
              }, {
                order: 3,
                team: teams.CRO_national
              }, {
                order: 4,
                team: teams.SWE_national
              }
            ]
          }
        }, {
          code: 'A4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ESP_national
              }, {
                order: 2,
                team: teams.GER_national
              }, {
                order: 3,
                team: teams.SUI_national
              }, {
                order: 4,
                team: teams.UKR_national
              }
            ]
          }
        },
        {
          code: 'B1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.AUT_national
              }, {
                order: 2,
                team: teams.NOR_national
              }, {
                order: 3,
                team: teams.ROU_national
              }, {
                order: 4,
                team: teams.NIR_national
              }
            ]
          }
        }, {
          code: 'B2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.CZE_national
              }, {
                order: 2,
                team: teams.SCO_national
              }, {
                order: 3,
                team: teams.ISR_national
              }, {
                order: 4,
                team: teams.SVK_national
              }
            ]
          }
        }, {
          code: 'B3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.HUN_national
              }, {
                order: 2,
                team: teams.RUS_national
              }, {
                order: 3,
                team: teams.SRB_national
              }, {
                order: 4,
                team: teams.TUR_national
              }
            ]
          }
        }, {
          code: 'B4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.WAL_national
              }, {
                order: 2,
                team: teams.FIN_national
              }, {
                order: 3,
                team: teams.IRL_national
              }, {
                order: 4,
                team: teams.BUL_national
              }
            ]
          }
        },
        {
          code: 'C1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.MNE_national
              }, {
                order: 2,
                team: teams.LUX_national
              }, {
                order: 3,
                team: teams.AZE_national
              }, {
                order: 4,
                team: teams.CYP_national
              }
            ]
          }
        }, {
          code: 'C2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ARM_national
              }, {
                order: 2,
                team: teams.MKD_national
              }, {
                order: 3,
                team: teams.GEO_national
              }, {
                order: 4,
                team: teams.EST_national
              }
            ]
          }
        }, {
          code: 'C3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SVN_national
              }, {
                order: 2,
                team: teams.GRE_national
              }, {
                order: 3,
                team: teams.KOS_national
              }, {
                order: 4,
                team: teams.MDA_national
              }
            ]
          }
        }, {
          code: 'C4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ALB_national
              }, {
                order: 2,
                team: teams.BLR_national
              }, {
                order: 3,
                team: teams.LTU_national
              }, {
                order: 4,
                team: teams.KAZ_national
              }
            ]
          }
        },
        {
          code: 'D1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FRO_national
              }, {
                order: 2,
                team: teams.MLT_national
              }, {
                order: 3,
                team: teams.LVA_national
              }, {
                order: 4,
                team: teams.AND_national
              }
            ]
          }
        }, {
          code: 'D2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GIB_national
              }, {
                order: 2,
                team: teams.LIE_national
              }, {
                order: 3,
                team: teams.SMR_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const genUefaNationsLeague2018to2019 = async () => {
  const tournamentData = {
    code: 'NL',
    name: 'UEFA Nations League',
    year: '2018-2019',
    host: '',
    edition: '1',
    logo: 'BPfLUwA.png',
    numOfGroups: 16,
    numOfTeams: 55,
    confederation: {
      connect: {
        code: 'UEFA'
      }
    },
    groups: {
      create: [
        {
          code: 'A1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NED_national
              }, {
                order: 2,
                team: teams.FRA_national
              }, {
                order: 3,
                team: teams.GER_national
              }
            ]
          }
        }, {
          code: 'A2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SUI_national
              }, {
                order: 2,
                team: teams.BEL_national
              }, {
                order: 3,
                team: teams.ISL_national
              }
            ]
          }
        }, {
          code: 'A3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.POR_national
              }, {
                order: 2,
                team: teams.ITA_national
              }, {
                order: 3,
                team: teams.POL_national
              }
            ]
          }
        }, {
          code: 'A4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.ENG_national
              }, {
                order: 2,
                team: teams.ESP_national
              }, {
                order: 3,
                team: teams.CRO_national
              }
            ]
          }
        },
        {
          code: 'B1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.UKR_national
              }, {
                order: 2,
                team: teams.CZE_national
              }, {
                order: 3,
                team: teams.SVK_national
              }
            ]
          }
        }, {
          code: 'B2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SWE_national
              }, {
                order: 2,
                team: teams.RUS_national
              }, {
                order: 3,
                team: teams.TUR_national
              }
            ]
          }
        }, {
          code: 'B3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BIH_national
              }, {
                order: 2,
                team: teams.AUT_national
              }, {
                order: 3,
                team: teams.NIR_national
              }
            ]
          }
        }, {
          code: 'B4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.DEN_national
              }, {
                order: 2,
                team: teams.WAL_national
              }, {
                order: 3,
                team: teams.IRL_national
              }
            ]
          }
        },
        {
          code: 'C1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SCO_national
              }, {
                order: 2,
                team: teams.ISR_national
              }, {
                order: 3,
                team: teams.ALB_national
              }
            ]
          }
        }, {
          code: 'C2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.FIN_national
              }, {
                order: 2,
                team: teams.HUN_national
              }, {
                order: 3,
                team: teams.GRE_national
              }, {
                order: 4,
                team: teams.EST_national
              }
            ]
          }
        }, {
          code: 'C3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.NOR_national
              }, {
                order: 2,
                team: teams.BUL_national
              }, {
                order: 3,
                team: teams.CYP_national
              }, {
                order: 4,
                team: teams.SVN_national
              }
            ]
          }
        }, {
          code: 'C4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.SRB_national
              }, {
                order: 2,
                team: teams.ROU_national
              }, {
                order: 3,
                team: teams.MNE_national
              }, {
                order: 4,
                team: teams.LTU_national
              }
            ]
          }
        },
        {
          code: 'D1',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.GEO_national
              }, {
                order: 2,
                team: teams.KAZ_national
              }, {
                order: 3,
                team: teams.LVA_national
              }, {
                order: 4,
                team: teams.AND_national
              }
            ]
          }
        }, {
          code: 'D2',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.BLR_national
              }, {
                order: 2,
                team: teams.LUX_national
              }, {
                order: 3,
                team: teams.MDA_national
              }, {
                order: 4,
                team: teams.SMR_national
              }
            ]
          }
        }, {
          code: 'D3',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.KOS_national
              }, {
                order: 2,
                team: teams.AZE_national
              }, {
                order: 3,
                team: teams.FRO_national
              }, {
                order: 4,
                team: teams.MLT_national
              }
            ]
          }
        }, {
          code: 'D4',
          teamsOnGroups: {
            create: [
              {
                order: 1,
                team: teams.MKD_national
              }, {
                order: 2,
                team: teams.ARM_national
              }, {
                order: 3,
                team: teams.GIB_national
              }, {
                order: 4,
                team: teams.LIE_national
              }
            ]
          }
        }
      ]
    }
  }

  await prisma.tournament.create({
    data: tournamentData
  })
}

const seed = async () => {
  await genUsers()
  await genConfederations()
  await clearTournament()
  await genWorldCup2022()
  await genWorldCup2018()
  await genWorldCup2014()
  await genWorldCup2010()
  await genWorldCup2006()
  await genWorldCup2002()
  await genWorldCup1998()
  await genEuro2020()
  await genEuro2016()
  await genEuro2012()
  await genEuro2008()
  await genEuro2004()
  await genEuro2000()
  await genEuro1996()
  await genUefaNationsLeague2022to2023()
  await genUefaNationsLeague2020to2021()
  await genUefaNationsLeague2018to2019()
}

seed()
