interface GearItem {
  name: string;
  description: string;
  units: "g" | "oz" | "kg" | "lb";
  weight: string;
  worn: boolean;
  consumable: boolean;
}

export default GearItem
