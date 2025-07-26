export const cards = [
  {
    title: "تعداد کل سفارش‌ها",
    content: "96 سفارش",
    status: "down",
    comparisonTime: "ماه قبل",
    comparisonPercentage: "6",
    img: "assets/orders/card-icon.png",
  },
  {
    title: "مجموع فروش این ماه",
    content: "102,000,000 تومان",
    status: "up",
    comparisonTime: "ماه قبل",
    comparisonPercentage: "6",
    img: "assets/orders/card-icon.png",
  },
  {
    title: "میانگین مبلغ هر سفارش",
    content: "1,200,000 تومان",
    status: "up",
    comparisonTime: "ماه قبل",
    comparisonPercentage: "6",
    img: "assets/orders/card-icon.png",
  },
];

export const tabs = [
  "همه",
  "در حال بررسی",
  "در حال آماده سازی",
  "تحویل به پیک",
  "ارسال شده",
  "لغو شده",
  "مرجوع  شده",
];

export const tableData = {
  headers: [
    "شماره سفارش",
    "مبلغ سفارش",
    "تاریخ ثبت سفارش",
    "وضعیت",
    "تعداد کالا",
    "موقعیت خریدار",
    "جزئیات",
  ],
  data: [
    {
      id: "5589693661",
      price: "1,200,000 تومان",
      date: "1404/01/20",
      status: "در حال بررسی",
      quantity: "2",
      location: "تهران",
      details: "more",
    },
    {
      id: "5589693662",
      price: "1,500,000 تومان",
      date: "1404/01/21",
      status: "در حال آماده سازی",
      quantity: "4",
      location: "شیراز",
      details: "more",
    },
    {
      id: "5589693663",
      price: "980,000 تومان",
      date: "1404/01/22",
      status: "تحویل به پیک",
      quantity: "1",
      location: "مشهد",
      details: "more",
    },
    {
      id: "5589693664",
      price: "2,300,000 تومان",
      date: "1404/01/23",
      status: "ارسال شده",
      quantity: "5",
      location: "اصفهان",
      details: "more",
    },
    {
      id: "5589693665",
      price: "870,000 تومان",
      date: "1404/01/24",
      status: "مرجوع شده",
      quantity: "2",
      location: "تبریز",
      details: "more",
    },
    {
      id: "5589693666",
      price: "1,100,000 تومان",
      date: "1404/01/25",
      status: "لغو شده",
      quantity: "3",
      location: "کرج",
      details: "more",
    },
  ],
};

export const orderData = {
  date: "1404/04/12",
  status: "ارسال شده",
  productSumPrice: "1200000",
  shippingPrice: "70000",
  fullPrice: "1270000",
  customer: {
    name: "مریم جهان بخشی",
    phoneNumber: "09330542369",
    email: "maryam.j@gmail.com",
    location: "تهران",
    address: "تهران، قلهک، سیمای جنوبی، ساختمان سیما، پلاک 30",
    postalCode: "2365658966",
    numberOfProducts: "3",
  },
  products: [
    {
      name: "نام محصول",
      details: "جزئیات محصول",
      price: "1200000",
      number: "1",
      priceSum: "12000000",
      img: "/insurance/assets/orders/details/pillow.png"
    },
    {
      name: "نام محصول",
      details: "جزئیات محصول",
      price: "1200000",
      number: "1",
      priceSum: "12000000",
      img: "/insurance/assets/orders/details/pillow.png"
    },
  ],
};