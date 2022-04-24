<template>
  <v-container id="contact" class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center header">~ Contact Us ~</v-subheader>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas.</p>
      </v-col>
      <v-col lg="6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.2999762455!2d78.46169489521603!3d7.851731513542368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1650453166982!5m2!1sen!2slk" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </v-col>
      <v-col lg="6">
        <v-form ref="form" lazy-validation>
          <v-text-field
              v-model="contactInfo.name"
              :counter="10"
              label="Name"
              required
          ></v-text-field>

          <v-text-field
              v-model="contactInfo.email"
              label="E-mail"
              required
          ></v-text-field>
          <v-textarea label="Message" v-model="contactInfo.message">

          </v-textarea>

          <v-btn color="success" class="mr-4">
            Send
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      contactInfo: {

      }
    }
  }
}
</script>

<style scoped>
.header {
  font-family: cursive;
  font-weight: 700;
  color: #AF2F31;
}
</style>