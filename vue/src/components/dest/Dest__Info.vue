               <template>
  <div class="info__container">
    <nav>
      <ul>
        <li
          v-for="(navItem, index) in props.allDests"
          :key="navItem"
          @click="emit('update', index)"
        >
          <a
            class="text--nav"
            :class="{ active: index == props.curDestIndex }"
            >{{ navItem }}</a
          >
        </li>
      </ul>
    </nav>
    <div>
      <h2>
        {{ curDestName }}
      </h2>
      <p class="text">
        {{ curDestDesc }}
      </p>
    </div>
    <div class="decoration-line"></div>
    <div class="info__figures">
      <div>
        <p class="sub-h-2">avg. distance</p>
        <p class="sub-h-1">
          {{ curDist }}
        </p>
      </div>
      <div>
        <p class="sub-h-2">est. travel time</p>
        <p class="sub-h-1">
          {{ curTravelTime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
import json from "@/assets/data/data.json";

const props = defineProps({
  allDests: {
    type: Array,
    required: true,
  },
  curDestIndex: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update"]);

const curJSON = computed(() => json.destinations[props.curDestIndex]);
const curDestName = computed(() => curJSON.value.name);
const curDestDesc = computed(() => curJSON.value.description);
const curDist = computed(() => curJSON.value.distance);
const curTravelTime = computed(() => curJSON.value.travel);
</script>

<style scoped>
/* General Design */
li {
  cursor: pointer;
}
.text--nav {
  color: var(--clr-accent);
  position: relative;
}

.text--nav::after {
  content: "";
  position: absolute;
  left: -0.1ch;
  bottom: -0.75rem;
  width: 100%;
  height: 0.1875rem;
  background-color: var(--clr-primary);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

li:hover .text--nav::after {
  opacity: 0.2474;
}

.active {
  color: var(--clr-primary);
}

.active::after {
  opacity: 1 !important;
}

.decoration-line {
  width: 100%;
  height: 0.0625rem;
  border-radius: 1rem;
  background-color: #383b4b;
  margin-top: 0.38rem;
  margin-bottom: -1.25rem;
}

/* Mobile Design */
.info__container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: calc(19.328125rem + 5vw);
}

nav ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.625rem;
}

.info__figures {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sub-h-1 {
  padding-top: 0.75rem;
}

/* Tablet Design */
@media screen and (min-width: 480px) {
  nav ul {
    gap: 2.15rem;
  }
  .info__container {
    max-width: calc(33.4125rem + 5vw);
    gap: 2.5rem;
  }
  .info__figures {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
}

/* Desktop Design */
@media screen and (min-width: 960px) {
  .info__container {
    max-width: 27.8125rem;
    gap: 3rem;
  }

  nav ul {
    justify-content: flex-start;
    gap: 2.19rem;
  }

  h2 {
    text-align: left;
    margin-bottom: 0.87rem;
  }

  .text {
    text-align: left;
  }

  .info__figures {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .sub-h-1,
  .sub-h-2 {
    text-align: left;
  }
}
</style>
