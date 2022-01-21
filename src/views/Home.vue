<script>
import WeeklyPlan from "../components/WeeklyPlan.vue";
import SvgIcon from "../components/SvgIcon.vue";
export default {
  components: {
    WeeklyPlan,
    SvgIcon,
  },
  data() {
    return {
      filterButtons: [
        {
          id: "01",
          filled: false,
          title: "Fiziksel Bilgilerim",
          value: "measures",
          icon: "ruler",
        },
        {
          id: "02",
          filled: false,
          title: "Diyet Amacım",
          value: "dietPurpose",
          icon: "target",
        },
        {
          id: "03",
          filled: false,
          title: "Sağlık Durumum",
          value: "healthInfo",
          icon: "report-medical",
        },
        {
          id: "04",
          filled: false,
          title: "Alerjilerim",
          value: "allergies",
          icon: "alert-octagon",
        },
        {
          id: "05",
          filled: false,
          title: "Aktivitelerim",
          value: "activities",
          icon: "activity",
        },
        {
          id: "06",
          filled: false,
          title: "Tercihlerim",
          value: "choices",
          icon: "star",
          gender: "",
        },
      ],
      userData: {
        measures: {
          filled: false,
          height: "",
          weight: "",
          age: "",
          bodyFat: "",
          bodyBone: "",
          bodyMuscle: "",
          gender: "",
        },
        dietPurpose: {
          filled: false,
        },
        healthInfo: {
          filled: false,
        },
        allergies: {
          filled: false,
        },
        activities: {
          filled: false,
        },
        choices: {
          filled: false,
        },
      },
      listUserData: null,
      weeklyPlan: [
        {
          day: 1,
          title: "Yemek Adı",
        },
      ],
      dietPurposes: [
        {
          id: "01",
          title: "Düşük Karbonhidratlı, Yüksek Proteinli",
          description: "Sportif bir vücut ve kas üretimini arttırmak isteyen kullanıcılar için",
        },
        {
          id: "02",
          title: "Yüksek Lif Desteği",
          description: "Metabolizma ve sağlıklı düzenli bir sağlığa kavuşmak isteyen kullanıcılar için",
        },
        {
          id: "03",
          title: "Vejeteryan",
          description: "Vejeteryan kullanıcılar için",
        },
        {
          id: "04",
          title: "Vegan",
          description: "Vegan kullanıcılar için",
        },
        {
          id: "05",
          title: "Karma",
          description: "Tek bir çeşide odaklanmayan her kullanıcı için uygun optimum diyet sistemi",
        },
        {
          id: "06",
          title: "Kabızlık Diyeti",
          description: "",
        },
        {
          id: "07",
          title: "Kardiyak Diyet",
          description: "",
        },
        {
          id: "08",
          title: "Sulu Gıda (R1) Diyeti",
          description: "",
        },
        {
          id: "09",
          title: "İshal Diyeti",
          description: "",
        },
        {
          id: "10",
          title: "Diyabetik Diyet",
          description: "",
        },
        {
          id: "11",
          title: "Mide Koruma Diyeti",
          description: "",
        },
        {
          id: "12",
          title: "Nötropenik Diyet",
          description: "",
        },
        {
          id: "13",
          title: "Nötropenik Diyet",
          description: "",
        },
        {
          id: "14",
          title: "Böbrek Koruma Diyeti",
          description: "",
        },
        {
          id: "15",
          title: "Karaciğer Koruma Diyeti",
          description: "",
        },
        {
          id: "16",
          title: "Safra Kesesi Koruma Diyeti",
          description: "",
        },
        {
          id: "17",
          title: "Gut Diyeti",
          description: "",
        },
        {
          id: "18",
          title: "Gebe ve Emzikli Diyeti",
          description: "",
        },
      ],
      allergies: [
        {
          id: "01",
          title: "Yumurta",
        },
        {
          id: "02",
          title: "Kuruyemiş",
        },
        {
          id: "03",
          title: "Buğday",
        },
        {
          id: "04",
          title: "Ceviz",
        },
        {
          id: "05",
          title: "Soya",
        },
        {
          id: "06",
          title: "Balık",
        },
        {
          id: "07",
          title: "Kabuklu Deniz Ürünü",
        },
      ],
      isFilterModalOpen: false,
      listUserData: false,
    };
  },
  computed: {
    // isFilteredData() {
    //   for (const key in this.userData) {
    //     const element = this.userData[key];
    //     if (element.isFilled) {
    //       return true;
    //     }
    //   }
    //   return false;
    // },
  },
  methods: {
    updateUserData(formId) {
      console.log(formId);
      const btn = this.filterButtons.find((btn) => btn.id == formId);
      btn.filled = true;
      const userData = this.userData;
      switch (formId) {
        case "01":
          userData.measures.filled = true;
          break;
        case "02":
          userData.dietPurpose.filled = true;
          break;
        case "03":
          userData.healthInfo.filled = true;
          break;
        case "04":
          userData.allergies.filled = true;
          break;
        case "05":
          userData.activities.filled = true;
          break;
        case "06":
          userData.choices.filled = true;
          break;

        default:
          break;
      }
      this.listUserData = JSON.parse(JSON.stringify(this.userData));
      this.isFilterModalOpen = false;
    },
    editData(key) {
      const btn = this.filterButtons.find((b) => b.value == key);
      this.isFilterModalOpen = btn.id;
    },
  },
};
</script>

<template>
  <!-- filter modal -->
  <div v-if="isFilterModalOpen" class="fixed z-50 inset-0 bg-gray-700/70 flex items-start justify-center py-10 px-6">
    <div class="bg-white max-w-xl w-full p-6 rounded-md shadow border relative">
      <button @click.prevent="isFilterModalOpen = false" class="absolute right-6 top-6">
        <SvgIcon name="cancel" class="h-7 w-7"></SvgIcon>
      </button>

      <form v-if="isFilterModalOpen == '01'" class="space-y-6">
        <h2 class="text-xl font-medium">Kişisel Bilgilerim</h2>
        <div>
          <input v-model="userData.measures.height" type="text" placeholder="Boyunuz" class="block py-3 px-4 w-full bg-gray-100 border-transparent rounded-md focus:border-blue-500 focus:bg-white focus:ring-0" />
        </div>
        <div>
          <input v-model="userData.measures.weight" type="text" placeholder="Kilonuz" class="block py-3 px-4 w-full bg-gray-100 border-transparent rounded-md focus:border-blue-500 focus:bg-white focus:ring-0" />
        </div>
        <div>
          <input v-model="userData.measures.age" type="text" placeholder="Yaşınız" class="block py-3 px-4 w-full bg-gray-100 border-transparent rounded-md focus:border-blue-500 focus:bg-white focus:ring-0" />
        </div>
        <div>
          <input v-model="userData.measures.bodyFat" type="text" placeholder="Vücut Yağ Oranı" class="block py-3 px-4 w-full bg-gray-100 border-transparent rounded-md focus:border-blue-500 focus:bg-white focus:ring-0" />
        </div>
        <div>
          <input v-model="userData.measures.bodyBone" type="text" placeholder="Kemik Ağırlığı" class="block py-3 px-4 w-full bg-gray-100 border-transparent rounded-md focus:border-blue-500 focus:bg-white focus:ring-0" />
        </div>
        <div>
          <input v-model="userData.measures.bodyMuscle" type="text" placeholder="Kas Kütlesi" class="block py-3 px-4 w-full bg-gray-100 border-transparent rounded-md focus:border-blue-500 focus:bg-white focus:ring-0" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="">
            <label class="bg-gray-100 rounded-md flex items-center justify-center py-3">
              <input v-model="userData.measures.gender" type="radio" name="gender" value="female" class="text-lg" />
              <span class="ml-4">Kadın</span>
            </label>
          </div>
          <div class="">
            <label class="bg-gray-100 rounded-md flex items-center justify-center py-3">
              <input v-model="userData.measures.gender" type="radio" name="gender" value="male" class="text-lg" />
              <span class="ml-4">Erkek</span>
            </label>
          </div>
        </div>
      </form>

      <form v-if="isFilterModalOpen == '02'" class="space-y-6">
        <h2 class="text-xl font-medium">Diyet Amacım</h2>
        <div class="grid grid-cols-2 gap-4">
          <label v-for="diet in dietPurposes" :key="diet.id" for="male" class="bg-gray-100 rounded-md flex items-center justify-between py-3 px-3">
            <input type="radio" name="dietPurpose" :value="diet.id" id="male" class="" />
            <span class="text-center flex-1 px-2">{{ diet.title }}</span>
          </label>
        </div>
      </form>

      <form v-if="isFilterModalOpen == '03'" class="space-y-6">
        <h2 class="text-xl font-medium">Sağlık Durumum</h2>

        <div class="space-y-4">
          <div class="">
            <label for="bed" class="bg-gray-100 rounded-md flex items-center px-3 py-3">
              <input type="radio" name="ilness" value="bed" id="bed" class="text-lg" />
              <span class="ml-4">Yatalak<em class="text-gray-500 text-sm ml-4">Hareketsiz hasta kullanıcılar için</em> </span>
            </label>
          </div>
          <div class="">
            <label for="bodyPart" class="bg-gray-100 rounded-md flex items-center px-3 py-3">
              <input type="radio" name="ilness" value="bodyPart" id="bodyPart" class="text-lg" />
              <span class="ml-4">Çeşitli organ yetmezliği ve devamlı hastalık sahibi olanlar</span>
            </label>
          </div>
        </div>
      </form>

      <form v-if="isFilterModalOpen == '04'" class="space-y-6">
        <h2 class="text-xl font-medium">Alerjilerim</h2>
        <div class="grid grid-cols-2 gap-4">
          <label v-for="allergy in allergies" :key="allergy.id" :for="allergy.id" class="bg-gray-100 rounded-md flex items-center justify-between py-3 px-3">
            <input type="checkbox" :name="allergy.id" :value="allergy.id" :id="allergy.id" class="" />
            <span class="text-center flex-1 px-2">{{ allergy.title }}</span>
          </label>
        </div>
      </form>

      <form v-if="isFilterModalOpen == '05'" class="space-y-6">
        <h2 class="text-xl font-medium">Aktivitelerim</h2>
        <div class="grid grid-cols-2 gap-4">
          <label for="Hareketsiz" class="bg-gray-100 rounded-md flex items-center justify-between py-3 px-3">
            <input type="radio" name="activiyLevel" value="hareketsiz" id="hareketsiz" class="" />
            <span class="text-center flex-1 px-2">Hareketsiz</span>
          </label>
          <label for="aktif" class="bg-gray-100 rounded-md flex items-center justify-between py-3 px-3">
            <input type="radio" name="activiyLevel" value="aktif" id="aktif" class="" />
            <span class="text-center flex-1 px-2">Aktif</span>
          </label>
          <label for="cokAktif" class="bg-gray-100 rounded-md flex items-center justify-between py-3 px-3">
            <input type="radio" name="activiyLevel" value="aktif" id="cokAktif" class="" />
            <span class="text-center flex-1 px-2">Çok Aktif</span>
          </label>
        </div>
      </form>

      <form v-if="isFilterModalOpen == '06'" class="space-y-6">
        <h2 class="text-xl font-medium">Tercihlerim</h2>
        <p>Kişiye özel durumlar</p>
      </form>

      <div class="flex items-center justify-between mt-6">
        <button @click.prevent="isFilterModalOpen = false" class="border text-gray-500 shadow-sm font-medium rounded-md py-3 px-4 sm:px-6">Vazgeç</button>
        <button @click.prevent="updateUserData(isFilterModalOpen)" class="border bg-emerald-500 font-medium text-white shadow-sm rounded-md py-3 px-4 sm:px-6">Menümü Özelleştir</button>
      </div>
    </div>
  </div>

  <div class="mt-4">
    <!-- header -->
    <header>
      <h2 class="text-4xl font-medium leading-tight">Sağlığınız için size özel yemek planı</h2>
      <p class="mt-4 leading-snug">Her diyet planı kişiye özeldir. Diyetisyen, kişisel bilgilerinize göre size özel haftalık yemek planı oluşturur.</p>
    </header>

    <!-- filter form -->
    <section class="mt-10 shadow-md rounded-md p-4 border xl:p-8">
      <h3 class="font-medium leading-none text-lg">Menünüzü Kişiselleştirin</h3>

      <div v-if="listUserData" class="mt-6">
        <div v-for="(data, key) in listUserData">
          <!-- measures -->
          <div v-if="key == 'measures' && data.filled == true">
            <div class="font-bold text-gray-700 flex items-center space-x-6">
              <span>Fiziksel Bilgileriniz</span>
              <button @click.prevent="editData(key)" class="flex items-center text-gray-500">
                <SvgIcon name="edit" class="h-5 w-5"></SvgIcon>
                <span class="ml-1">Düzenle</span>
              </button>
            </div>
            <ul class="space-y-2 mt-1">
              <li class="space-x-2">
                <span>Boy:</span>
                <span>{{ data.height }}</span>
              </li>
              <li class="space-x-2">
                <span>Kilo:</span>
                <span>{{ data.weight }}</span>
              </li>
              <li class="space-x-2">
                <span>Yaş:</span>
                <span>{{ data.age }}</span>
              </li>
              <li class="space-x-2">
                <span>Yağ Oranı:</span>
                <span>{{ data.bodyFat }}</span>
              </li>
              <li class="space-x-2">
                <span>Kemik Ağırlığı:</span>
                <span>{{ data.bodyBone }}</span>
              </li>
              <li class="space-x-2">
                <span>Kas Kütlesi:</span>
                <span>{{ data.bodyMuscle }}</span>
              </li>
              <li class="space-x-2">
                <span>Cinsiyet:</span>
                <span>{{ data.gender }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="text-gray-600">Size en uygun menü için bilgilerinizi ekleyin:</div>
        <div class="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-3">
          <template v-for="(btn, i) in filterButtons" :key="btn.id">
            <button v-if="!btn.filled" @click.prevent="isFilterModalOpen = btn.id" class="py-4 bg-gray-100 rounded-md font-medium text-gray-500 flex flex-col items-center justify-center">
              <SvgIcon :name="btn.icon" class="h-10 w-10"></SvgIcon>
              <span class="mt-4">{{ btn.title }}</span>
            </button>
          </template>
        </div>
      </div>
    </section>

    <!-- weekly menu -->
    <section class="mt-8">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl font-medium text-gray-700">Haftalık Menü</h3>
        <div class="border-b-2 border-gray-700">
          <button class="p-2 text-sm font-medium text-gray-500 flex items-center justify-center">
            <SvgIcon name="refresh" class="h-6 w-6"></SvgIcon>
            <span class="ml-2">Yenile</span>
          </button>
        </div>
      </div>

      <WeeklyPlan></WeeklyPlan>
    </section>
  </div>
</template>

<style></style>
