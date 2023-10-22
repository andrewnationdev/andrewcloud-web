type TFileIcon = {
    icon: string;
    type: string;
    color: string;
}

const icons: TFileIcon[] = [
    {
      icon: "",
      type: "text/plain",
      color: "",
    },
    {
      icon: "",
      type: "text/html",
      color: "",
    },
    {
      icon: "",
      type: "text/css",
      color: "",
    },
    {
      icon: "",
      type: "application/javascript",
      color: "",
    },
    {
      icon: "",
      type: "application/json",
      color: "",
    },
    {
      icon: "",
      type: "image/png",
      color: "",
    },
    {
      icon: "",
      type: "image/jpeg",
      color: "",
    },
    {
      icon: "",
      type: "image/gif",
      color: "",
    },
    {
      icon: "",
      type: "audio/mpeg",
      color: "",
    },
    {
      icon: "",
      type: "video/mpeg",
      color: "",
    },
    {
      icon: "",
      type: "application/pdf",
      color: "",
    },
    {
      icon: "",
      type: "application/zip",
      color: "",
    },
    {
      icon: "",
      type: "application/x-msdownload",
      color: "",
    },
    {
        icon: "",
        type: "folder",
        color: ""
    }
  ];

export default function getFileIcons(type: string): TFileIcon {
    for(let i = 0; i < icons.length; i++){
        if(icons[i].type == type){
            return icons[i];
        }
    }

    return {
        icon: "",
        type: "",
        color: ""
    }
}