import GearItem from './gear-item'

interface GearListItem {
  gearItem: GearItem;
  quantity: number;
}

interface Group {
  name: string;
  gearListItems: GearListItem[];
}

interface GearList {
  name: string;
  description: string;
  groups: Group[];
}

export default GearList
