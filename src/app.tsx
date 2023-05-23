import { BadExample } from './examples/bad';
import { GoodExample } from './examples/good';

export function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-around gap-10 overflow-auto bg-slate-700 px-4 text-slate-50 xl:min-h-[500px] xl:min-w-[1000px] xl:flex-row">
      <BadExample />
      <GoodExample />
    </main>
  );
}
