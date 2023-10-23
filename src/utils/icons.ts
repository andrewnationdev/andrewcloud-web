export type TFileIcon = {
    icon: string;
    type: string;
    color: string;
}

const icons: TFileIcon[] = [
    {
      icon: "",
      type: "text/plain",
      color: "#29b6f6",
    },
    {
      icon: "",
      type: "text/html",
      color: "#29b6f6",
    },
    {
      icon: "",
      type: "text/css",
      color: "#29b6f6",
    },
    {
      icon: "",
      type: "application/javascript",
      color: "#03a9f4",
    },
    {
      icon: "",
      type: "application/json",
      color: "#03a9f4",
    },
    {
      icon: "image",
      type: "image/png",
      color: "#039be5",
    },
    {
      icon: "image",
      type: "image/jpeg",
      color: "#039be5",
    },
    {
      icon: "image",
      type: "image/gif",
      color: "#039be5",
    },
    {
      icon: "",
      type: "audio/mpeg",
      color: "#0288d1",
    },
    {
      icon: "video_library",
      type: "video/mpeg",
      color: "#0277bd",
    },
    {
      icon: "video_library",
      type: "video/mp4",
      color: "#0277bd",
    },
    {
      icon: "",
      type: "application/pdf",
      color: "#01579b",
    },
    {
      icon: "",
      type: "application/zip",
      color: "#01579b",
    },
    {
      icon: "",
      type: "application/x-msdownload",
      color: "#01579b",
    },
    {
        icon: "folder",
        type: "folder",
        color: "#0d47a1"
    }
  ];

export function getFileIcon(type: string): TFileIcon {
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