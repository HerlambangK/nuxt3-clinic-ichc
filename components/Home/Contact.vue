<!-- <script setup lang="ts">
interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Web Development",
  message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  console.log(contactForm);

  const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

  window.location.href = mailToLink;
};
</script> -->


<template>
  <UiContainer class="grid grid-cols-1 items-center py-10 lg:min-h-[800px] lg:grid-cols-2 lg:gap-20">
    <div class="mx-auto">
      <h1 class="mb-4 text-4xl font-semibold lg:mb-6 lg:text-5xl">Contact us</h1>
      <p class="mb-12 text-lg text-muted-foreground lg:text-sm">
        Our friendly team would love to hear from you.
      </p>
      <form class="max-w-[480px]" @submit="submit">
        <fieldset :disabled="isSubmitting" class="grid gap-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <UiVeeInput label="First name" placeholder="Nama depan" name="firstName" required />
            </div>
            <div>
              <UiVeeInput label="Last name" placeholder="Nama belakang" name="lastName" required />
            </div>
          </div>
          <div>
            <UiVeeInput label="Email" placeholder="me@example.com" type="email" name="email" required />
          </div>
          <div>
            <UiVeeInput label="Phone" type="number" name="phone" placeholder="isikan nomor hp yang anda gunakan"
              required />

          </div>
          <div>
            <UiVeeTextarea :rows="5" label="Message" placeholder="Leave us a message..." name="message" required />
          </div>
          <div>
            <UiButton v-wave class="w-full" type="submit">Send message</UiButton>
          </div>

        </fieldset>
      </form>
    </div>
    <div class="hidden lg:flex mt-10 h-[300px] w-full overflow-hidden rounded-lg lg:mt-0 lg:h-full lg:rounded-none">
      <iframe
        src="
        https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3470.764197810031!2d106.98935792975499!3d-6.24763851954169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d002c528829%3A0x8889ffd78a9c9edd!2sICHC%20Klinik!5e0!3m2!1sid!2sid!4v1725521057960!5m2!1sid!2sid"
        width=" 800" height="800" class="h-full w-full" style="border: 0" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" />
    </div>
  </UiContainer>

</template>

<script lang="ts" setup>
import { object, string, number } from "yup";
import type { InferType } from "yup";

const schema = object({
  firstName: string().required().label("First name").typeError("format nama tidak valid"),
  lastName: string().required().label("Last name").typeError("format nama tidak valid"),
  email: string().email().required().label("Email").typeError("format email tidak valid"),
  phone: number().required().label("Phone").typeError("format nomor tidak valid"),
  message: string().required().label("Message").typeError("format pesan tidak valid"),
});

const { handleSubmit, isSubmitting } = useForm<InferType<typeof schema>>({
  validationSchema: schema,
});

const submit = handleSubmit(async (values) => {
  console.log(values);

  useSonner.success("Pesan Terkirim", {
    description: "Pesan terkirim, terima kasih sudah menghubungi kami.",
  });
});
</script>
