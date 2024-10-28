<script>
	import { Card } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Things I know" />
</svelte:head>

<div class="flex justify-center xs:mx-4 md:mx-16">
	<div class="w-full max-w-[1144px] py-4">
		<h1 class="text-4xl">Skills</h1>
		<hr class="my-4 h-px border-0 bg-blue-200 dark:bg-gray-700" />

		<div
			class="flex shrink-0 flex-wrap gap-x-4 gap-y-8 py-4
      xs:flex-col xs:content-center
      sm:flex-row sm:justify-evenly
      md:flex-row md:justify-evenly"
		>
			<Card class="relative w-[280px]">
				<h3 class="mb-2 mt-4 text-2xl text-blue-700">Product Management</h3>
				<ul class="list-inside list-none space-y-1 text-gray-700">
					<li>Vision and goal setting</li>
					<li>Product Roadmaps</li>
					<li>Pains and Gains Mapping</li>
					<li>Feature scoping & prioritisation</li>
					<li>KPI setting and tracking</li>
					<li>Product Growth funnels</li>
					<li>Design thinking</li>
					<li>Human-centred design</li>
					<li>User story mapping</li>
					<li>Productboard, Miro, Figma</li>
					<li>A/B Testing</li>
				</ul>
			</Card>

			<Card class="relative w-[280px]">
				<h3 class="mb-2 mt-4 text-2xl text-blue-700">Engineering Management</h3>
				<ul class="list-inside list-none space-y-1 text-gray-700">
					<li>Team health monitoring</li>
					<li>Blameless postmortems and Git reviews</li>
					<li>Team forecasting</li>
					<li>Leadership and mentoring</li>
					<li>Delivery Roadmapping</li>
					<li>Agile, scum, kanban</li>
					<li>Behaviour-driven development</li>
					<li>Branching, testing, and delivery Strategies</li>
				</ul>
			</Card>

			<Card class="relative w-[280px]">
				<h3 class="mb-2 mt-4 text-2xl text-blue-700">Tech</h3>
				<ul class="list-inside list-none space-y-1 text-gray-700">
					<li>Solution Architecture</li>
					<li>AWS, Goolge Cloud, and Azure hosting</li>
					<li>PostgreSQL</li>
					<li>Microservices</li>
					<li>Data science and analysis</li>
					<li>CI/CD</li>
					<li>C4 Diagrams</li>
					<li>Swagger</li>
					<li>Rest and GraphQL</li>
					<li>ReactJS / NextJS</li>
					<li>Javascipt, Typescript, NodeJS</li>
					<li>Python, Django Rest Framework</li>
					<li>GoLang</li>
					<li>Android & iOS</li>
				</ul>
			</Card>

			<!-- min-[1060px]:flex-col -->

			<section class="relative flex flex-col gap-8 min-[1000px]:flex-row">
				<Card class="w-[280px]">
					<h3 class="mb-2 mt-4 text-2xl text-blue-700">Analytics</h3>
					<ul class="list-inside list-none space-y-1 text-gray-700">
						<li>Google Analytics</li>
						<li>Google Tag Manager</li>
						<li>Firebase Analytics</li>
					</ul>
				</Card>

				<Card class="w-[280px]">
					<h3 class="mb-2 mt-4 text-2xl text-blue-700">Tools</h3>
					<ul class="list-inside list-none space-y-1 text-gray-700">
						<li>Jira</li>
						<li>Miro</li>
						<li>Figma</li>
						<li>Lucidchart</li>
					</ul>
				</Card>
			</section>
		</div>
	</div>
</div>
