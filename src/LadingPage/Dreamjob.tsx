import { TextInput } from '@mantine/core';

const Dreamjob = () => {
    return (
        <div className="flex items-center px-20 gap-4">
            <div className="flex flex-col flex-1 justify-start">
                <div className="text-6xl font-bold text-mine-shaft-100 leading-tight [&>span]:text-bright-sun-400">Find your <span>dream job</span> with us</div>
                <div className="text-lg text-mine-shaft-200">Good life begins with good company. Start explore thousands of jobs in one place.</div>
                <div className="flex  gap-4 mt-4">
                    <TextInput
                      className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />
                    <TextInput
                      className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Fulltime"
                    />
                </div>
                <div>

                </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
                <div className="w-[24rem]">
                    <img src="Boy.png" alt="Boy Image" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Dreamjob;
