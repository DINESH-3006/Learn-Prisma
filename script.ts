import { PrismaClient } from "@prisma/client";
import { emit } from "process";
// const prisma=new PrismaClient();
const prisma=new PrismaClient({log:["query"]});


async function main(){
    // await prisma.user.deleteMany()
    // await prisma.userPreference.deleteMany()
    // const user=await prisma.user.create({data:{name:"Dinesh Babu"}})
    // console.log(user)
    // const users=await prisma.user.findMany()
    //  console.log(users)
    // const users=await prisma.user.deleteMany()



// CREATING A USER 

    // const user = await prisma.user.create({
    //     data:{
    //         name:"Dinesh",
    //         email:"saidineshbabu18@gmail.com",
    //         age:20,
    //         userPreference:{
    //             create:{
    //                 emailUpdates:true,
    //             },
    //         },
    //     },
    //     // include:{
    //     //     userPreference:true
    //     // }
    //     select:{
    //         name:true,
    //         userPreference: {select:{id:true}}
    //     }
    // })
    // console.log(user)

    
// CREATING MULTIPLE USER

    // const users = await prisma.user.createMany({
    //     data:[
            // {
            //  name:"Akash",
            // email:"akash@gmail.com",
            // age:19,
            // },
    //         {
    //         name:"Barath",
    //         email:"barathss@gmail.com",
    //         age:40,
    //         }
    //    ]
    // })
    // console.log(users);


    // Find based on Unique Attributes
    // const user = await prisma.user.findUnique({
    //     where:{
    //         age_name:{
    //             age:69,
    //             name:"Muthu",
    //         }
    //     },
    // })
    // console.log(user)


    // Find frst occured data based on condition 

    // const user1 = await prisma.user.findFirst({
    //     where:{
    //             name:"Barath",
    //     },
    // })
    // console.log(user1)


    // Find Many data based on where filters

    // const user1 = await prisma.user.findMany({
        // where:{
                // email:{equals:"saidineshbabu18@gmail.com"},
             //   name:{in:["Barath","Dinesh"]},  //not , equals, notIn
                // age: {lt:40},
                // OR:[
                //     {email:{startsWith:"saidineshbabu18"}},
                //     {email:{endsWith:"@gmail.commm"}}
                // ]
    //         },
    //     orderBy:{
    //         age:"desc",
    //     },
    //     distinct:["name","age"],
    //     take:100,
    //     skip:0
    // })
    // console.log(user1)


    // Where clause instead of using populate in mongoose

    // const post=await prisma.post.findMany({
    //     where:{
    //         author:{
    //             name:"Barath"
    //         }
    //     }
    // })
    // console.log(post)

// Update Records
    // const barath=await prisma.user.update({
    //     where:{
    //         email:"@gmail.com"
    //     },
    //     data:{
    //         email:"butt@gmail.com",
    //     }
    // })

    // console.log(barath)

// await prisma.user.delete({
//   where:{
//     age_name:{
//         age:69,
//         name:"Barath"
//     }
//   }
// })

// const butt=await prisma.user.findMany({
//     where:{
//         name: {in:["Barath","Dinesh"]},
//     }
// })
// console.log(butt)

const allRecords =await prisma.user.findMany()
console.log(allRecords)

}

main()
.catch(e=>{
    console.log(e.message);
})
.finally(async()=>{
    await prisma.$disconnect()
})
