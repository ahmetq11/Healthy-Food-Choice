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
          title: "Fiziksel Bilgilerim",
          value: "measures",
          icon: "ruler",
        },
        {
          id: "02",
          title: "Diyet Amacım",
          value: "dietPurpose",
          icon: "target",
        },
        {
          id: "03",
          title: "Sağlık Koşullarım",
          value: "healthInfo",
          icon: "report-medical",
        },
        {
          id: "04",
          title: "Alerjilerim",
          value: "allergies",
          icon: "alert-octagon",
        },
        {
          id: "05",
          title: "Aktivitelerim",
          value: "activities",
          icon: "activity",
        },
        {
          id: "06",
          title: "Tercihlerim",
          value: "choices",
          icon: "star",
        },
      ],
      weeklyPlan: [
        {
          day:1,
          title: "Yemek Adı",
          
        }
      ]
    };
  },
};
</script>

<template>
  <div class="mt-4">
    <!-- header -->
    <header>
      <h2 class="text-4xl font-medium leading-tight">Sağlığınız için size özel yemek planı</h2>
      <p class="mt-4 leading-snug">Her diyet planı kişiye özeldir. Diyetisyen, kişisel bilgilerinize göre size özel haftalık yemek planı oluşturur.</p>
    </header>

    <!-- filter form -->
    <section class="mt-10 shadow-md rounded-md p-4 border xl:p-8">
      <h3 class="font-medium leading-none">Menünüzü Kişiselleştirin</h3>

      <!-- added filters -->
      <!-- <div class="mt-4 xl:mt-6">
        <form @submit.prevent="">
          <div class="font-medium text-gray-500">Fiziksel Bilgilerim</div>
          <div class="mt-2 space-y-2 xl:flex xl:space-x-6 xl:space-y-0">
            <div class="xl:flex-1">
              <label for="height" class="text-sm text-gray-500">Boy</label>
              <input type="number" name="height" id="height" placeholder="Boyunuz" class="mt-1 w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div class="xl:flex-1">
              <label for="height" class="text-sm text-gray-500">Kilo</label>
              <input type="number" name="height" id="height" placeholder="Boyunuz" class="mt-1 w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div class="xl:flex-1">
              <label for="height" class="text-sm text-gray-500">Yaş</label>
              <input type="number" name="height" id="height" placeholder="Boyunuz" class="mt-1 w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div class="xl:flex-1">
              <div class="text-sm text-gray-500">Cinsiyet</div>
              <div class="mt-1 flex items-center">
                <div class="flex items-center flex-1">
                  <input type="radio" name="gender" value="male" id="male" />
                  <label for="male" class="pl-2">Erkek</label>
                </div>
                <div class="flex items-center flex-1">
                  <input type="radio" name="gender" value="female" id="female" />
                  <label for="female" class="pl-2">Kadın</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div> -->

      <div class="mt-4">
        <div class="grid grid-cols-2 gap-4 xl:grid-cols-3">
          <button v-for="(btn, i) in filterButtons" :key="btn.id" class="py-4 bg-gray-100 rounded-md font-medium text-gray-500 flex flex-col items-center justify-center">
            <SvgIcon :name="btn.icon" class="h-10 w-10"></SvgIcon>
            <span class="mt-4">{{ btn.title }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- weekly menu -->
    <section class="mt-8">
      <WeeklyPlan></WeeklyPlan>
    </section>
  </div>
</template>

<style></style>
