import OutputCard from "@/components/OutputCard";

export default function Home() {
  return (
    <main className="w-full mx-auto max-w-xl">
      <h1 className="text-center uppercase sm:text-2xl/8 mb-4 sm:mb-8">Password Generator</h1>

      <form className="space-y-4 sm:space-y-6">
        <OutputCard value="" />
        <section className="p-4 sm:px-6 bg-gray-800">
          
        </section>
      </form>
    </main>
  );
}
