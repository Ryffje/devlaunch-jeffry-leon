interface Download {
    id: number;
    file: string;
    progress: number;
    completed: boolean;
}

const downloadList: Download[] = [
    { id: 1, file: 'file1.txt', progress: 0, completed: false },
    { id: 2, file: 'file2.png', progress: 0, completed: false },
    { id: 3, file: 'file3.pdf', progress: 0, completed: false },
];

function downloadFile(download: Download): Promise<void>{
    return new Promise ((resolve) => {
        const interval = setInterval(() => {
            if (download.progress < 100){
                download.progress += 10
                console.log(`Downloading ${download.file} - Progress: ${download.progress}%`)
            } else {
                download.completed = true
                clearInterval(interval)
                resolve()
            }
        }, 1000)

    })
}

async function manageDownloads(){
    for(const download of downloadList){
        try {
            await downloadFile(download)
            console.log(`Download of ${download.file} complete`)
            
        } catch (error){
            console.log(`Error during download of ${download.file}: ${error}`)
        }
    }

    console.log("All downloads have been complete")

}

manageDownloads()