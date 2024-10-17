<template>
  <div>
    <div class="file-upload-wrapper">
      <input
        type="file"
        name="file"
        id="file"
        class="file-input"
        @change="handleFileUpload"
        :accept="mimeType"
        :multiple="maxFilesAmount > 1"
      />
      <label for="file" class="file-select-box">
        <div class="d-flex flex-column text-center p-5">
          <span class="upload-text">Drop file here</span>
          <span class="or-text">or</span>
          <div>
            <span class="browse-button">Browse</span>
          </div>
        </div>
      </label>
    </div>

    <div class="single-image-preview my-2" v-if="isSingleImage && files.length">
      <img :src="files[0].preview" alt="Image Preview" class="image-preview" />
      <button type="button" class="delete-button" @click="removeFile(0)">
        X
      </button>
    </div>

    <div v-else class="file-preview-wrapper d-flex flex-wrap gap-2 my-2">
      <div v-for="(file, index) in files" :key="index" class="image-preview">
        <img :src="file.preview" alt="Image Preview" class="image-preview" />
        <button type="button" class="delete-button" @click="removeFile(index)">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxFilesAmount: {
      type: Number,
      required: false,
      default: 1,
    },
    mimeType: {
      type: String,
      required: false,
      default: "image/*", // Default to image types
    },
    onUploaded: {
      type: Function,
      required: false,
    },
    default: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      files: this.default.map((file) => ({
        preview: file, // Assuming the default array contains URLs
        isLoading: false,
      })),
    };
  },
  methods: {
    handleFileUpload(event) {
      const selectedFiles = Array.from(event.target.files);
      if (selectedFiles.length + this.files.length > this.maxFilesAmount) {
        alert(`You can only upload a maximum of ${this.maxFilesAmount} files.`);
        return;
      }

      selectedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.files.push({
            preview: e.target.result,
            isLoading: false,
          });
        };
        reader.readAsDataURL(file);
      });
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    upload() {
      // Simulate API call
      console.log("Uploading files:", this.files);
      if (this.onUploaded) {
        this.onUploaded(this.files);
      }
    },
  },
  computed: {
    isSingleImage() {
      return this.maxFilesAmount === 1;
    },
  },
};
</script>

<style scoped>
.file-input {
  display: none;
}

.file-select-box {
  width: 100%;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: border-color 0.3s ease;
  background-color: #f9f9f9;
  cursor: pointer;
}

.file-select-box:hover {
  border-color: #07074d;
}

.upload-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
}

.or-text {
  font-size: 16px;
  color: #666;
  margin: 8px 0;
}

.browse-button {
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background-color: #07074d;
  display: inline-block;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.browse-button:hover {
  background-color: #4a4e8d;
}

.image-preview {
  width: 90px;
  height: 90px;
  background: black;
  position: relative;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire area */
}

.delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ff0000; /* Red color for delete button */
}

.delete-button:hover {
  background: rgba(255, 0, 0, 0.2);
}

.single-image-preview {
  position: relative;
  width: 100%;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Ensures the image doesn't overflow */
}

.single-image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire area */
}
</style>
