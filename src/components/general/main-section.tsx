import Header from "@/components/general/Header";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import {Sidebar} from "@/components/general/Siderbar";
import {getCookie, setCookie} from 'cookies-next';


interface Props {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  bgGradient?: string;
}

export default function MainSection({
                                      children,
                                      bgColor = "#202020",
                                      className,
                                      bgGradient = '',
                                    }: Props) {
  const layout = getCookie("react-resizable-panels:layout")
  console.log(layout)

  const defaultLayout = layout ? JSON.parse(layout) : [20, 80]


  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        setCookie(`react-resizable-panels:layout`, JSON.stringify(sizes))
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel defaultSize={defaultLayout[0]} minSize={20} maxSize={45} className="min-w-60">
        <Sidebar/>
      </ResizablePanel>
      <ResizableHandle className="bg-black hover:bg-white/40 my-4 mx-1 hover:cursor-grabbing"/>
      <ResizablePanel defaultSize={defaultLayout[1]}>
        <div className="grid grid-cols-8">
          <div className="flex flex-col h-[calc(95vh-4rem)] w-auto overflow-auto col-span-8 rounded-lg mt-2 mr-2">
            <main>
              <div
                className={`h-full w-full rounded-lg ${className}`}
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${bgColor} 0%, #131313 ${bgGradient}, #131313 100%)`,
                }}
              >
                <Header/>
                {children}
              </div>
            </main>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>

// <div
    //   className={`h-full rounded-lg ${className}`}
    //   style={{
    //     backgroundImage: `linear-gradient(to bottom, ${bgColor} 0%, #131313 ${bgGradient}, #131313 100%)`,
    //   }}
    // >
    //   <Header/>
    //   {children}
    // </div>
  )
}