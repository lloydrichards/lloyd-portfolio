import { RouteType } from "../LifePlastic/Interfaces/Interfaces";
export const RootRoutes: Array<RouteType> = [
  //-----------------------------------------------------
  //-----------------GARBAGE Routes
  //-----------------------------------------------------
  {
    parent: "Mixed-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Other-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "LDPE-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "ESP-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "SeperateHDPE-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "SeperatePETE-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "PVC-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "MixedPS-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "PP-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "MixedPETE-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "MixedHDPE-Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Pipe-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Office-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Bag-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Frame-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Board-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Infill-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Landscape-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Bottle-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Medicine-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Milk-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Cap-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Furniture-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "PVCPipe-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Bucket-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Window-Garbage",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Garbage",
    require: "TRASHBin",
    possible: [""],
    waste: "none",
    wasteChance: 0,
  },
  //-----------------------------------------------------
  //-----------------MIXED Routes
  //-----------------------------------------------------

  {
    parent: "Mixed-PETE",
    require: "MixedBin",
    possible: [
      "Bale-MixedPETE-Product",
      "Bale-MixedPETE-Mixed",
      "Bale-MixedPETE-Sorted",
      "Bale-SeperatedPETE",
    ],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Mixed-HDPE",
    require: "HDPEMachineSort",
    possible: [
      "Bale-SeperatedHDPE-Hand",
      "Bale-MixedHDPE-Machine",
      "Bale-MixedHDPE-MachinePipes",
    ],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-PP",
    require: "PPMachineSort",
    possible: ["Bale-PP-Machine", "Bale-PP-Machine-Bucket"],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-LDPE",
    require: "LDPEMachineSort",
    possible: ["Bale-LDPE-Machine"],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-Other",
    require: "OTHERMachineSort",
    possible: ["Bale-Other-Machine"],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-PS-Hand",
    require: "PSMachineSort",
    possible: ["Brick-ESP", "Brick-ESP-Board", "Brick-ESP-Infill"],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-PS-Machine",
    require: "PSMachineSort",
    possible: ["Ingot-MixedPS", "Brick-MixedPS"],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-PVCRecovery",
    require: "MixedBin",
    possible: [
      "Mixed-PS-Machine",
      "Mixed-PS-Hand",
      "Mixed-Other",
      "Mixed-LDPE",
      "Mixed-PP",
      "Mixed-HDPE",
      "Mixed-PETE",
    ],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-SeperatePETRecovery",
    require: "MixedBin",
    possible: [
      "Mixed-PS-Machine",
      "Mixed-PS-Hand",
      "Mixed-Other",
      "Mixed-LDPE",
      "Mixed-PP",
      "Mixed-HDPE",
      "Mixed-PETE",
    ],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-MixedPETRecovery",
    require: "MixedBin",
    possible: [
      "Mixed-PS-Machine",
      "Mixed-PS-Hand",
      "Mixed-Other",
      "Mixed-LDPE",
      "Mixed-PP",
      "Mixed-HDPE",
      "Mixed-PETE",
    ],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-HDPERecovery",
    require: "MixedBin",
    possible: [
      "Mixed-PS-Machine",
      "Mixed-PS-Hand",
      "Mixed-Other",
      "Mixed-LDPE",
      "Mixed-PP",
      "Mixed-HDPE",
      "Mixed-PETE",
    ],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Mixed-HDPERecovery _2",
    require: "MixedBin",
    possible: [
      "Mixed-PS-Machine",
      "Mixed-PS-Hand",
      "Mixed-Other",
      "Mixed-LDPE",
      "Mixed-PP",
      "Mixed-HDPE",
      "Mixed-PETE",
    ],
    waste: "Mixed-Garbage",
    wasteChance: 0.1,
  },
  //-----------------------------------------------------
  //-----------------BALE Routes
  //-----------------------------------------------------
  {
    parent: "Bale-SeperatedPETE",
    require: "SeperatedPETGrinder",
    possible: [
      "Mixed-SeperatePETRecovery",
      "SeperatePETE-Garbage",
      "Pellet-GreenrPET",
      "Pellet-BluerPET",
      "Pellet-BrownrPET",
      "Pellet-ClearrPET",
      "Regrind-PP-Recovered",
      "Regrind-MixedPETE-Recovered",
    ],
    waste: "SeperatePETE-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedPETE-Product",
    require: "PETBin",
    possible: ["Product-Furniture"],
    waste: "Furniture-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedPETE-Sorted",
    require: "SeperatedPETGrinder",
    possible: [
      "Mixed-SeperatePETRecovery",
      "SeperatePETE-Garbage",
      "Pellet-GreenrPET",
      "Pellet-BluerPET",
      "Pellet-BrownrPET",
      "Pellet-ClearrrPET",
      "Regrind-PP-Recovered",
      "Regrind-MixedPETE-Recovered",
    ],
    waste: "SeperatePETE-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-PremiumPETE",
    require: "SeperatedPETGrinder",
    possible: [
      "Mixed-SeperatePETRecovery",
      "SeperatePETE-Garbage",
      "Pellet-GreenrPET",
      "Pellet-BluerPET",
      "Pellet-BrownrPET",
      "Pellet-ClearrPET",
      "Regrind-PP-Recovered",
      "Regrind-MixedPETE-Recovered",
    ],
    waste: "SeperatePETE-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedPETE-Mixed",
    require: "PETBin",
    possible: [
      "Mixed-MixedPETRecovery",
      "Regrind-MixedPETE",
      "Regrind-PP-PETRecovery",
    ],
    waste: "MixedPETE-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-SeperatedHDPE-Hand",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-SeperatedHDPE-Hand_2",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedHDPE-Hand",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedHDPE-Machine",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedHDPE-MachinePipes",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-MixedHDPE-HandPipes",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-PP-Machine",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-PP-Hand",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-PP-Hand-Bucket",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-PP-Machine-Bucket",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Brick-ESP",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Brick-MixedPS",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Brick-ESP-Infill",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Brick-ESP-Board",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Ingot-MixedPS",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-LDPE-Hand",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-LDPE-Machine",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-Other-Hand",
    require: "OTHERRefiner",
    possible: ["Pellet-Other-Concrete", "Pellet-Other-Furniture"],
    waste: "Other-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Bale-Other-Machine",
    require: "OTHERRefiner",
    possible: ["Pellet-Other-Concrete", "Pellet-Other-Furniture"],
    waste: "Other-Garbage",
    wasteChance: 0.1,
  },
  //-----------------------------------------------------
  //-----------------PELLET Routes
  //-----------------------------------------------------
  {
    parent: "Pellet-SeperaterHDPE",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-MixedHDPE-Bottles",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-MixedHDPE-Pipes",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-MixedPETE-Fibre",
    require: "PETBin",
    possible: ["rPET-Fibre"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Pellet-MixedPETE-Furniture",
    require: "PETBin",
    possible: ["Product-Furniture"],
    waste: "Furniture-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-BluerPET",
    require: "PETBin",
    possible: ["Product-Bottle"],
    waste: "Bottle-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-BrownrPET",
    require: "PETBin",
    possible: ["Product-Bottle"],
    waste: "Bottle-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-ClearrPET",
    require: "PETBin",
    possible: ["Product-Bottle"],
    waste: "Bottle-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-GreenrPET",
    require: "PETBin",
    possible: ["Product-Bottle"],
    waste: "Bottle-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-rPP-Buckets",
    require: "PETBin",
    possible: ["Product-Bucket"],
    waste: "Bucket-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-rPP-Caps",
    require: "PPBin",
    possible: ["Product-Cap"],
    waste: "Cap-Garbage",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-PS-Frame",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-PS-Pipes",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-PS-Boards",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-LDPE-Bags",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-LDPE-Landscape",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-PVC-Pipes",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-PVC-Toys",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-PVC-Toys_2",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Pellet-Other-Furniture",
    require: "TRASHBin",
    possible: ["Product-Furniture"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Pellet-Other-Concrete",
    require: "TRASHBin",
    possible: ["Product-Concrete"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-SeperateHDPE",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Regrind-MixedHDPE",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Regrind-MixedPETE",
    require: "PETBin",
    possible: ["Pellet-MixedPETE-Furniture", "Pellet-MixedPETE-Fibre"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-MixedPETE-Recovered",
    require: "PETBin",
    possible: ["Pellet-MixedPETE-Furniture", "Pellet-MixedPETE-Fibre"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-PP-SepHDPERecovery",
    require: "PPBin",
    possible: ["Pellet-rPP-Caps", "Pellet-rPP-Buckets"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-PP-MixHDPERecovery",
    require: "PPBin",
    possible: ["Pellet-rPP-Caps", "Pellet-rPP-Buckets"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-PP-PETRecovery",
    require: "PPBin",
    possible: ["Pellet-rPP-Caps", "Pellet-rPP-Buckets"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-PP-Recovered",
    require: "PPBin",
    possible: ["Pellet-rPP-Caps", "Pellet-rPP-Buckets"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Regrind-PP",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Regrind-PS",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Regrind-PVC",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  //-----------------------------------------------------
  //-----------------HAND Routes
  //-----------------------------------------------------
  {
    parent: "PET",
    require: "PETBin",
    possible: ["Bale-PremiumPETE"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "HDPE",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "PP",
    require: "PPBin",
    possible: ["Bale-PP-Hand-Bucket", "Bale-PP-Hand"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "LDPE",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "Other",
    require: "OTHERBin",
    possible: ["Bale-Other-Hand"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "PCV",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  {
    parent: "PS",
    require: "PETBin",
    possible: [""],
    waste: "",
    wasteChance: 0.1,
  },
  //-----------------------------------------------------
  //-----------------PRODUCT Routes
  //-----------------------------------------------------
  {
    parent: "rPET-Fibre",
    require: "TRASHBin",
    possible: [
      "Product-Cloths",
      "Product-NylonBags",
      "Product-SleepingBag",
      "Product-Thread",
    ],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Concrete",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-GardenFurniture",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Beams",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Bag",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Frames",
    require: "OTHERBin",
    possible: ["Other"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Boards",
    require: "PSBin",
    possible: ["PS"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Infill",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Cap",
    require: "PPBin",
    possible: ["PP"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Medicine",
    require: "HDPEBin",
    possible: ["HDPE"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Milk",
    require: "HDPEBin",
    possible: ["HDPE"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Bottle",
    require: "PETBin",
    possible: ["PET"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Landscape",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-PVCPipes",
    require: "PVCBin",
    possible: ["PVC"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Bucket",
    require: "OTHERBin",
    possible: ["Other"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Office",
    require: "PSBin",
    possible: ["PS"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-OtherPipe",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Furniture",
    require: "OTHERBin",
    possible: ["Other"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Toys",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Windows",
    require: "PVCBin",
    possible: ["PVC"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-SleepingBag",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-NylonBags",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Cloths",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
  {
    parent: "Product-Thread",
    require: "TRASHBin",
    possible: ["Garbage"],
    waste: "none",
    wasteChance: 0,
  },
];