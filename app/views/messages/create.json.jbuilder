json.name @message.user.name
json.content @message.content
json.image @message.image.url
json.user_id @message.user.id
json.time @message.created_at.strftime("%Y/%m/%d %H:%M")
