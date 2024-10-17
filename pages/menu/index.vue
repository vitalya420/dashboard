<template>
  <div class="card">
    <div class="card-body pb-0">
      <div class="d-flex justify-content-between align-items-center">
        <h4 class="card-title text-muted">
          <font-awesome-icon icon="fa-mug-saucer" /> Menu Positions
        </h4>
        <nuxt-link class="btn btn-sm btn-success" to="/menu/create">
          <font-awesome-icon icon="fa-plus" /> Create
        </nuxt-link>
      </div>
    </div>

    <hr class="py-0 my-0" />

    <div class="container-fluid py-3">
      <div class="d-flex justify-content-between align-items-center">
        <a class="btn btn-sm btn-outline-primary" data-bs-toggle="collapse" href="#filters">
          <font-awesome-icon icon="fa-filter" /> Open filters
        </a>
        <div>
          Display type:
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-sm"
              :class="displayType === 'list' ? 'btn-primary' : 'btn-outline-primary'"
              @click="setDisplayType('list')"
            >
              <font-awesome-icon icon="fa-list" />
            </button>
            <button
              type="button"
              class="btn btn-sm"
              :class="displayType === 'grid' ? 'btn-primary' : 'btn-outline-primary'"
              @click="setDisplayType('grid')"
            >
              <font-awesome-icon icon="fa-grip" />
            </button>
          </div>
        </div>
      </div>

      <div class="collapse" id="filters">
        <div class="mt-3" style="max-width: 500px;">
          <h5>
            <font-awesome-icon icon="fa-filter" /> Filters
          </h5>
          <form @submit.prevent="applyFilters">
            <div class="mb-3">
              <label for="nameFilter" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="nameFilter"
                placeholder="Enter name"
                v-model="nameFilter"
              />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="canBePurchased"
                  v-model="canBePurchased"
                />
                <label class="form-check-label" for="canBePurchased">
                  Can be purchased for bonuses
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="cannotBePurchased"
                  v-model="cannotBePurchased"
                />
                <label class="form-check-label" for="cannotBePurchased">
                  Cannot be purchased for bonuses
                </label>
              </div>
            </div>
            <div class="d-flex">
              <button type="submit" class="btn btn-sm btn-primary">Apply Filters</button>
              <button type="button" @click="resetFilters" class="mx-1 btn btn-sm btn-danger">Reset Filters</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container-fluid py-3">
      <span>Total: {{ total }} products</span>

      <!-- Conditional rendering based on displayType -->
      <div v-if="displayType === 'list'">
        <!-- Table for list view -->
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Bonuses Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>${{ item.price }}</td>
              <td>{{ item.bonuses }} bon.</td>
              <td>
                <nuxt-link :to="`/menu/${item.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit</nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else>
        <!-- Cards for grid view -->
        <div class="d-flex flex-row flex-wrap gap-4 justify-content-start">
          <div
            class="card"
            style="width: min(15rem, 100%);"
            v-for="item in items"
            :key="item.id"
          >
            <img :src="item.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price: ${{ item.price }}</li>
              <li class="list-group-item">Bonuses price: {{ item.bonuses }} bon.</li>
            </ul>
            <div class="card-body">
              <nuxt-link :to="`/menu/${item.id}/edit`" class="card-link btn btn-sm btn-outline-secondary">Edit</nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination controls -->
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: page === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(page - 1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="pageNum in totalPages" :key="pageNum" :class="{ active: pageNum === page }">
            <a class="page-link" href="#" @click.prevent="changePage(pageNum)">
              {{ pageNum }}
            </a>
          </li>
          <li class="page-item" :class="{ disabled: page === totalPages }">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(page + 1)">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayType: "list",
      nameFilter: "",
      canBePurchased: false,
      cannotBePurchased: false,
      items: [], // Fetched paginated items
      page: 1, // Current page
      per_page: 10, // Items per page
      total: 0, // Total number of items
      totalPages: 1, // Total number of pages
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.per_page);
    },
  },
  methods: {
    setDisplayType(type) {
      this.displayType = type;
    },
    applyFilters() {
      this.page = 1;
      this.fetchData();
    },
    resetFilters() {
      this.nameFilter = "";
      this.canBePurchased = false;
      this.cannotBePurchased = false;
      this.page = 1;
      this.fetchData();
    },
    changePage(pageNum) {
      if (pageNum >= 1 && pageNum <= this.totalPages) {
        this.page = pageNum;
        this.fetchData();
      }
    },
    fetchData() {
      // Simulating an API call with paginated data.
      // In reality, this will be a fetch request to your API.
      const apiUrl = `/api/menu?page=${this.page}&per_page=${this.per_page}&filters=${this.nameFilter}`;
      
      // Example API call to be replaced with actual logic:
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.items = data.on_page;
          this.page = data.page;
          this.per_page = data.per_page;
          this.total = data.total;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-weight: bold;
}
.card-body {
  padding: 1rem;
}
</style>
