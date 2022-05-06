require 'date'

class Task
    attr_accessor :title, :description, :progress, :duedate

    def initialize 
        @title = title
        @description = description
        @progress = 'in progress'
        @duedate = duedate
    end 

    def status
        "#{title} is #{progress}"
    end

end

class TaskList
    def initialize
        @tasks = []
    end

    def add_task(task)
        @tasks << task
    end

    def number_of_task
        @tasks.length
    end

    def print_completed
        @tasks.each do |a|
            if a.progress == 'done'
                puts a.title
            end
        end
    end

    def print_incompleted
        @tasks.each do |a|
            if a.progress == 'in progress'
                puts a.title
            end
        end
    end

    def get_task
        date = Date.today
        @tasks.filter do |a|
            if a.duedate == date && a.progress == 'in progress'
                 a 
            end
        end
    end

end