export type TFileIcon = {
    icon: string;
    type: string;
    color: string;
}

const icons: TFileIcon[] = [
    {
      icon: "text_fields",
      type: "text/plain",
      color: "#29b6f6",
    },
    {
      icon: "code",
      type: "text/html",
      color: "#29b6f6",
    },
    {
      icon: "code",
      type: "text/css",
      color: "#29b6f6",
    },
    {
      icon: "code",
      type: "application/javascript",
      color: "#03a9f4",
    },
    {
      icon: "code",
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
      icon: "audiotrack",
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
      icon: "text_fields",
      type: "application/pdf",
      color: "#01579b",
    },
    {
      icon: "inbox",
      type: "application/zip",
      color: "#01579b",
    },
    {
      icon: "insert_drive_file",
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