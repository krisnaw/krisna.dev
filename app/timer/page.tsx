"use client";
import {Card} from "@/components/card";
import {Button} from "@/stories/Button";

export default function Page() {
    return (
        <div className={'flex items-center justify-center'}>
            <Card className="w-full max-w-md mx-auto">
                <div>
                    <div className="text-2xl text-center">Pomodoro Timer</div>
                </div>
                <div>
                    {/*<Tabs defaultValue="work" className="w-full mb-6">*/}
                    {/*    <TabsList className="grid w-full grid-cols-2">*/}
                    {/*        <TabsTrigger value="work">Work</TabsTrigger>*/}
                    {/*        <TabsTrigger value="break">Break</TabsTrigger>*/}
                    {/*    </TabsList>*/}
                    {/*</Tabs>*/}

                    <div className="text-6xl font-bold text-center mb-8" aria-live="polite">
                        25:00
                    </div>

                    <div className="w-full bg-secondary rounded-full h-2.5 mb-6">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: '45%'}}></div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <Button
                            size="large"
                            label="Button"
                            onClick={() => {}}
                            primary
                        />

                        
                        {/*<Button size="lg">*/}
                        {/*    <PlayIcon className="mr-2 h-4 w-4" />*/}
                        {/*    Start*/}
                        {/*</Button>*/}
                        {/*<Button size="lg" variant="outline">*/}
                        {/*    <RotateCcwIcon className="mr-2 h-4 w-4" />*/}
                        {/*    Reset*/}
                        {/*</Button>*/}
                    </div>
                </div>
            </Card>
        </div>
    )
}