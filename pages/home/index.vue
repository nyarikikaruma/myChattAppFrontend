<template>
	<div class="flex h-screen items-center justify-center">
		<div class="md:w-2/5 lg:w-2/5 w-full rounded-lg bg-blue-900">
			<div class="flex justify-center rounded-t-lg bg-sky-950 pb-4 pt-4 text-white">Messages</div>
			<div class="flex md:h-[50vh] lg:h-[50vh] h-96 rounded-b-lg">
				<MessagesList></MessagesList>
				<div class="overflow-auto w-full" v-if="showContacts">
					<Contacts></Contacts>
					
				</div>
				<div v-else class="flex w-2/3 flex-col items-center bg-indigo-200">
					<div class="flex justify-between w-full items-center p-4">
						<div @click="openContacts" class="flex flex-col items-center cursor-pointer" title="New Message">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
							</svg>
						</div>
						<div class="md:mt-8 lg:mt-8 mt-4">
							<img class="md:h-16 lg:h-16 md:w-16 lg:w-16 w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/businessman-wearing-suit-touching-red-boxing-gloves-hanging-from-his-neck_138670-211.jpg?t=st=1722005445~exp=1722009045~hmac=2a72dd0bf16d562da139a6523e8a603602ae29021b836fd9978f7efe52173cc7&w=1380" alt="" />
						</div>
						<div @click="openAddContacts" class="flext items-center cursor-pointer" title="Add User">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-7 text-green-900">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
							</svg>
						</div>
					</div>
					<div class="md:mt-2 lg:mt-2 mt-1 text-center mb-2 ">
							<p class="md:font-bold lg:font-bold md:text-base lg:text-base text-sm">James Mwangi</p>
							<span class="text-xs md:text-sm lg:text-sm">Software Engineer</span>
					</div>
					<div v-if="addUser">
						<AddUser></AddUser>
					</div>
					<div class="overflow-auto w-3/4 bg-teal-400">
						<Chats></Chats>
					</div>
					<SendButton></SendButton>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>

definePageMeta({
  middleware: ["routes"]
})
const addUser = ref(false)
const showContacts = ref(false)

provide('showContactkey', showContacts)
provide('showAddUserKey', addUser)

function openContacts() {
	showContacts.value = !showContacts.value
}

function openAddContacts() {

	addUser.value = !addUser.value
}

</script>
<style scoped>
    
</style>