class Node
    attr_accessor :value, :nxt

    def initialize(value, nxt: nil)
        @value = value
        @nxt = nxt
    end
end

class LinkedList 
    attr_accessor :head

    def initialize
    end

    def addValue(value)
        if @head.nil? then
            @head = value
        else
            temp = @head
            while !temp.nxt.nil? do
                temp = temp.nxt
            end
            temp.nxt = value
        end 
    end

    def print
        temp = @head
        while !temp.nil?
            puts temp.value
            temp = temp.nxt
        end
    end
end

LL = LinkedList.new
newNode = Node.new(5)
LL.addValue(newNode)
newNode = Node.new(6)
LL.addValue(newNode)
newNode = Node.new(7)
LL.addValue(newNode)
newNode = Node.new(8)
LL.addValue(newNode)
newNode = Node.new(9)
LL.addValue(newNode)


puts LL.print